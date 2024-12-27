"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BookType } from "@prisma/client"
import ActionButton from "./ActionButton"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<BookType>[] = [
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
            const bookType = row.original;
            return <div className="py-4">
                {bookType.name}
            </div>
        }
    },
    {
        id: "action",
        header: () => <h5 className="text-center">Action</h5>,
        cell: ({ row }) => {
            const bookType = row.original;
            return <div className="flex items-center justify-center gap-4">
                <ActionButton bookType={bookType} />
            </div>
        }
    },
]
