import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const branches = await prisma.branch.findMany({});
        return NextResponse.json({ success: true, branches });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest, context: Context) => {
    try {
        const { name, contact, location } = await req.json();
        // validation

        await prisma.branch.create({
            data: {
                name,
                contact,
                location
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}