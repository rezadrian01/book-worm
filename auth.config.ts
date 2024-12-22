import type { NextAuthConfig } from "next-auth";
import prisma from "./lib/prisma";
import { User } from "@prisma/client";

const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return user
    } catch (error) {
        console.log(error);
    }
}

export const authConfig = {
    pages: {
        signIn: '/auth/signin'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;