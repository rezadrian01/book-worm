"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Book } from "@prisma/client"
import ActionButton from "./ActionButton"
import { BookWithRelations } from "@/app/lib/definition"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<BookWithRelations>[] = [
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
        accessorKey: "title",
        header: () => <h5>Title</h5>,
        cell: ({ row }) => {
            const book = row.original;
            return <div className="py-4">
                {book.title}
            </div>
        }
    },
    {
        accessorKey: "author",
        header: () => <h5>Author</h5>,
        cell: ({ row }) => {
            const book = row.original;
            return <div className="py-4">
                {book.author}
            </div>
        }
    },
    {
        id: "availability",
        header: () => <h5 className="text-center">Availability</h5>,
        cell: ({ row }) => {
            const book = row.original;
            return <div className="py-4 text-center">
                {book.stock > 0 ? "Available" : "Not Available"}
            </div>
        }
    },
    {
        accessorKey: "typeId",
        header: () => <h5 className="text-center">Type</h5>,
        cell: ({ row }) => {
            const book = row.original;
            return <div className={`py-4 text-center`}>
                {book.type.name}
            </div>
        }
    },
    {
        id: "action",
        header: () => <h5 className="text-center">Action</h5>,
        cell: ({ row }) => {
            const book = row.original;
            return <div className="flex items-center justify-center gap-4">
                <ActionButton book={book} />
            </div>
        }
    },
]
