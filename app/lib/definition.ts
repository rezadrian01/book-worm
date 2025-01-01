import { Book, BookType, Borrow, Branch, User } from "@prisma/client"

export interface Context {
    params: {
        id: string
    }
}

export type BookWithRelations = Book & {
    type: BookType;
    branch: Branch;
}

export type BorrowWithRelations = Borrow & {
    user: User;
    book: BookWithRelations;
}