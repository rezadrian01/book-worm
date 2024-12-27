import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ success: true, users });
    } catch (error) {
        console.log(error);
    }
}