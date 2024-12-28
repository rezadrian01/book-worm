import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: Context) => {
    try {
        console.log('here')
        const { id } = await context.params;
        const book = await prisma.book.findUnique({
            where: {
                id: id
            }
        })

        return NextResponse.json({ success: true, book });
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (req: NextRequest, context: Context) => {
    try {
        const { id } = context.params;
        const { title, author, typeId, branchId, stock, language } = await req.json();
        // validation
        if (!title || !author || !typeId || !branchId || !stock || !language) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }
        const stockNumber = Number(stock);
        await prisma.book.update({
            where: {
                id: id
            },
            data: {
                title,
                author,
                typeId,
                branchId,
                stock: stockNumber,
                language
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
        await prisma.book.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error);
    }
}