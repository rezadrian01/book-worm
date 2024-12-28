import { Book, BookType, Branch } from "@prisma/client"

export interface Context {
    params: {
        id: string
    }
}

export type BookWithRelations = Book & {
    type: BookType;
    branch: Branch;
}