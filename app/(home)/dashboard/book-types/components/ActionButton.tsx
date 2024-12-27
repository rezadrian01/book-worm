import { BookType } from '@prisma/client'
import React from 'react'
import BookTypeFormDialog from './BookTypeFormDialog'
import DeleteDialog from '@/app/(home)/components/DeleteDialog'
import { Eye, Pencil, Trash } from 'lucide-react'

const ActionButton = ({ bookType }: { bookType: BookType }) => {
    return (
        <div className='flex items-center gap-4 justify-end'>
            <BookTypeFormDialog bookType={bookType} type='SEE'>
                <button>
                    <Eye size={17} />
                </button>
            </BookTypeFormDialog>
            <BookTypeFormDialog bookType={bookType} type='EDIT'>
                <button>
                    <Pencil size={17} />
                </button>
            </BookTypeFormDialog>
            <DeleteDialog url={`/api/book-types/${bookType.id}`}>
                <button>
                    <Trash color="#ef4444" size={17} />
                </button>
            </DeleteDialog>
        </div>
    )
}

export default ActionButton