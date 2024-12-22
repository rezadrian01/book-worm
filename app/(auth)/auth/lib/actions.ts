"use server";

import { signIn, signOut } from "@/auth";
import { ActionResult } from "@/lib/definition";
import { AuthError } from "next-auth";
import { signUpFormSchema } from "./validation";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';


export const signin = async (prevState: ActionResult, formData: FormData): Promise<ActionResult> => {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData.entries()),
            redirectTo: "/dashboard"
        });

        return {
            success: true
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        errorTitle: "Credentials error",
                        errorDesc: ["Wrong username or password."]
                    };
                default:
                    return {
                        errorTitle: "Server error",
                        errorDesc: ["Something went wrong, please try again later."]
                    };
            }
        }
        throw error;
    }
}

export const signup = async (prevState: ActionResult, formData: FormData): Promise<ActionResult> => {
    try {
        const parsedCredentials = signUpFormSchema.safeParse(Object.fromEntries(formData.entries()));

        const issues = parsedCredentials.error?.issues.map(issue => ({ message: issue.message, path: issue.path[0] }));
        if (!parsedCredentials.success) {
            return {
                errorTitle: "Error validation",
                errorDesc: ["Validation failed"],
                issues: issues,
            }
        }
        const hashedPassword = await bcrypt.hash(parsedCredentials.data.password, 12)

        await prisma.user.create({
            data: {
                ...parsedCredentials.data,
                role: "BORROWER",
                password: hashedPassword
            }
        })

        return {
            success: true
        }
    } catch (error) {
        console.log(error);
        return {
            errorTitle: "Server error",
            errorDesc: ["Something went wrong, please try again later."],
        }
    }
}

export const signout = async () => {
    try {
        await signOut({ redirectTo: "/auth/signin" });
    } catch (error) {
        console.log(error);
        throw error;
    }
}