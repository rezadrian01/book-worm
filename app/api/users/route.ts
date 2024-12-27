import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const GET = async (req: NextRequest) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "asc"
            }
        });
        return NextResponse.json({ success: true, users });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { contact, email, firstName, lastName, role, username, password, confirmPassword } = await req.json();
        // validation
        if (confirmPassword !== password) {
            return NextResponse.json({ success: false, message: "Password does not match" });
        }
        if (!contact || !email || !firstName || !lastName || !role || !username || !password) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }

        await prisma.user.create({
            data: {
                contact,
                email,
                firstName,
                lastName,
                role,
                username,
                password: await bcrypt.hash(password, 12)
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}