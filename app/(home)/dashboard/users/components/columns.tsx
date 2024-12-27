"use client"

import { ColumnDef } from "@tanstack/react-table"
import ActionButton from "./ActionButton"
import { User } from "@prisma/client"
import { cn, getRoleColor } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<User>[] = [
    {
        id: "number",
        header: () => <h5>#</h5>,
        cell: ({ row }) => {
            return <div className="py-4">
                {row.index + 1}.
            </div>
        }
    },
    {
        accessorKey: "username",
        header: () => <h5>Username</h5>,
        cell: ({ row }) => {
            const user = row.original;
            return <div className="py-4">
                {user.username}
            </div>
        }
    },
    {
        accessorKey: "firstName",
        header: () => <h5>Firstname</h5>,
        cell: ({ row }) => {
            const user = row.original;
            return <div className="py-4">
                {user.firstName}
            </div>
        }
    },
    {
        accessorKey: "contact",
        header: () => <h5>Contact</h5>,
        cell: ({ row }) => {
            const user = row.original;
            return <div className="py-4">
                {user.contact}
            </div>
        }
    },
    {
        accessorKey: "role",
        header: () => <h5 className="text-center">Role</h5>,
        cell: ({ row }) => {
            const user = row.original;
            return <div className={`py-4 text-center`}>
                <Badge className={cn("text-white font-normal", user.role === "ADMIN" ? "bg-sky-500" : "bg-green-500")} variant={'outline'}>{user.role}</Badge>
            </div>
        }
    },
    {
        id: "action",
        header: () => <h5 className="text-center">Action</h5>,
        cell: ({ row }) => {
            const user = row.original;
            return <div className="flex items-center justify-center gap-4">
                <ActionButton user={user} />
            </div>
        }
    },
]
