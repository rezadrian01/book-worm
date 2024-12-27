import { Context } from "@/app/lib/definition";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: Context) => {
    const { id } = await context.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        return NextResponse.json({ success: true, user });
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (req: NextRequest, context: Context) => {
    const { id } = await context.params;
    try {
        const { username, firstName, lastName, email, contact } = await req.json();
        // validation
        if (!username || !firstName || !lastName || !email || !contact) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }

        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                username,
                firstName,
                lastName,
                email,
                contact
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}

export const DELETE = async (req: NextRequest, context: Context) => {
    const { id } = await context.params;
    try {
        await prisma.user.delete({
            where: {
                id: id
            }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}