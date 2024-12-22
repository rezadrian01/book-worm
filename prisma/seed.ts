import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
    try {
        const admin = await prisma.user.create({
            data: {
                contact: "0812",
                email: "admin@gmail.com",
                firstName: "admin",
                lastName: "admin",
                password: await bcrypt.hash("123456", 10),
                role: "ADMIN",
                username: "admin",
            }
        })
        console.log(admin);
    } catch (error) {
        console.log("Failed to seed");
        console.error(error);
    }
}

main().then(() => {
    console.log("Seeder success");
}).catch(err => console.log(err));