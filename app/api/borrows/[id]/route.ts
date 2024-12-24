import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export const GET = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const borrow = await prisma.borrow.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true, borrow });
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const { status } = await req.json();
        await prisma.borrow.update({
            where: {
                id: id
            },
            data: {
                status: status
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
        await prisma.borrow.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error);
    }
}