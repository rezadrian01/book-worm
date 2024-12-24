import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const { name, contact, location } = await req.json();
        await prisma.branch.update({
            where: {
                id: id
            },
            data: {
                name, contact, location
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}

export const DELETE = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        await prisma.branch.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}