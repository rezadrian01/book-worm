import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const borrows = await prisma.borrow.findMany({
            include: {
                book: true
            }
        })
        return NextResponse.json({ success: true, borrows });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { userId, bookId, dueDate } = await req.json();
        await prisma.borrow.create({
            data: {
                userId,
                dueDate,
                status: "BORROWED",
                bookId
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}