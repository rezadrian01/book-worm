import { z } from "zod";


export const signUpFormSchema = z.object({
    firstName: z.string({ required_error: "Invalid first name" }).min(3, { message: "First name must have at least 3 letters " }),
    lastName: z.string({ required_error: "Invalid last name" }).min(3, { message: "Last name must have at least 3 letters" }),
    contact: z.string({ required_error: "Invalid contact" }).min(3, { message: "Contact must have at least 3 numbers" }),
    email: z.string({ required_error: "Invalid email" }).email({ message: "Invalid email" }).min(5, { message: "Email must have at least 5 letters" }),
    username: z.string({ required_error: "Invalid username" }).min(3, { message: "Username must have at least 3 letters" }),
    password: z.string({ required_error: "Invalid password" }).min(5, { message: "Password must have at least 5 letters" })
});

export const signInFormSchema = z.object({
    username: z.string({ required_error: "Invalid username" }).min(3, { message: "Username must have at least 3 letters" }),
    password: z.string({ required_error: "Invalid password" }).min(5, { message: "Password must have at least 5 letters" })
})