import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcrypt from 'bcrypt';

async function getUser(username: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: username
            }
        })
        return user;
    } catch (error) {
        console.log(error);
    }

}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z.object({
                username: z.string(),
                password: z.string().min(5)
            }).safeParse(credentials);

            if (parsedCredentials.success) {
                const { username, password } = parsedCredentials.data;
                const user = await getUser(username);
                if (!user) return null

                const passwordsMatch = await bcrypt.compare(password, user.password);
                if (passwordsMatch) return user;
            }

            console.log("Invalid Credentials");
            return null;
        }
    })]
})