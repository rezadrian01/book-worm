"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const authenticate = async (prevState: any, formData: FormData) => {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid Credentials";
                default:
                    return "Something Went Wrong";
            }
        }
        throw error;
    }
}