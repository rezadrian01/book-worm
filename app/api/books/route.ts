import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const books = await prisma.book.findMany({
            include: {
                type: true,
                branch: true
            },
            orderBy: {
                createdAt: "asc"
            },

        });
        // const groupBooks = await prisma.book.groupBy({
        //     by: ['branchId']
        // })
        return NextResponse.json({ success: true, books });
        // return NextResponse.json({ success: true, groupBooks });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { title, author, typeId, branchId, stock, language } = await req.json();
        // validation
        if (!title || !author || !typeId || !branchId || !stock || !language) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }
        const stockNumber = Number(stock);
        await prisma.book.create({
            data: {
                title,
                author,
                typeId,
                branchId,
                stock: stockNumber,
                language,
            }
        });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, message: error.message || "Internal Server Error" }, { status: 500 });
    }

}