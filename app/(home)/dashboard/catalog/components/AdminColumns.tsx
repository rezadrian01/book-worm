"use client"

import { Borrow, Branch } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import ActionButton from "./ActionButton"
import { BorrowWithRelations } from "@/app/lib/definition"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<BorrowWithRelations>[] = [
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
        accessorKey: "book",
        header: () => <h5>Title</h5>,
        cell: ({ row }) => {
            const borrow = row.original;
            return <div className="py-4">
                {borrow.book.title}
            </div>
        }
    },
    {
        accessorKey: "dueDate",
        header: () => <h5>Due Date</h5>,
        cell: ({ row }) => {
            const borrow = row.original;
            const dueDate = new Date(borrow.dueDate).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
            return <div className="py-4">
                {dueDate}
            </div>
        }
    },
    {
        accessorKey: "status",
        header: () => <h5>Status</h5>,
        cell: ({ row }) => {
            const borrow = row.original;
            return <div className="py-4">
                {borrow.status}
            </div>
        }
    },
    {
        id: "action",
        header: () => <h5 className="text-center">Action</h5>,
        cell: ({ row }) => {
            const borrow = row.original;
            return <div className="flex items-center justify-center gap-4">
                <ActionButton borrow={borrow} />
            </div>
        }
    },
]
