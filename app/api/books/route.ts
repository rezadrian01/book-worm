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
