"use client"

import { Branch } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import ActionButton from "./ActionButton"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<Branch>[] = [
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
        accessorKey: "name",
        header: () => <h5>Name</h5>,
        cell: ({ row }) => {
            const branch = row.original;
            return <div className="py-4">
                {branch.name}
            </div>
        }
    },
    {
        accessorKey: "location",
        header: () => <h5>Location</h5>,
        cell: ({ row }) => {
            const branch = row.original;
            return <div className="py-4">
                {branch.location}
            </div>
        }
    },
    {
        accessorKey: "contact",
        header: () => <h5>Contact</h5>,
        cell: ({ row }) => {
            const branch = row.original;
            return <div className="py-4">
                {branch.contact}
            </div>
        }
    },
    {
        id: "action",
        header: () => <h5 className="text-center">Action</h5>,
        cell: ({ row }) => {
            const branch = row.original;
            return <div className="flex items-center justify-center gap-4">
                <ActionButton branch={branch} />
            </div>
        }
    },
]
