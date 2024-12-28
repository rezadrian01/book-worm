import { Book, BookType, Branch } from '@prisma/client'
import React from 'react'
import BookFormDialog from './BookFormDialog'
import { Eye, Pencil, Trash } from 'lucide-react';
import DeleteDialog from '@/app/(home)/components/DeleteDialog';

const ActionButton = ({ book }: { book: Book }) => {
    return (
        <div className='flex items-center gap-4 justify-end'>
            <BookFormDialog book={book} type='SEE'>
                <button>
                    <Eye size={17} />
                </button>
            </BookFormDialog>
            <BookFormDialog book={book} type='EDIT'>
                <button>
                    <Pencil size={17} />
                </button>
            </BookFormDialog>
            <DeleteDialog url={`/api/books/${book.id}`}>
                <button>
                    <Trash color="#ef4444" size={17} />
                </button>
            </DeleteDialog>
        </div>
    )
}

export default ActionButton