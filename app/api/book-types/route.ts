import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const bookTypes = await prisma.bookType.findMany();
        return NextResponse.json({ success: true, bookTypes });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { name } = await req.json();
        // validation
        if (!name) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }
        await prisma.bookType.create({
            data: {
                name
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}