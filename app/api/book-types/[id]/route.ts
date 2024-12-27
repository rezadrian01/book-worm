import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const bookType = await prisma.bookType.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true, bookType });
    } catch (error) {
        console.log(error);

    }
}

export const PUT = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const { name } = await req.json();
        // validation
        if (!name) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }
        await prisma.bookType.update({
            where: {
                id: id
            },
            data: {
                name
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}

export const DELETE = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        await prisma.bookType.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}