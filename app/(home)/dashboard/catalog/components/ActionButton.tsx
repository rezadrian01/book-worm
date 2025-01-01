import { Borrow } from '@prisma/client'
import React, { FC } from 'react'
import CatalogFormDialog from './CatalogFormDialog'
import { Eye, Pencil, Trash } from 'lucide-react'
import { BorrowWithRelations } from '@/app/lib/definition'
import DeleteDialog from '@/app/(home)/components/DeleteDialog'

interface ActionButtonProps {
    borrow: BorrowWithRelations
}

const ActionButton: FC<ActionButtonProps> = ({ borrow }) => {
    return (
        <div className='flex items-center gap-4 justify-end'>
            <CatalogFormDialog borrow={borrow} type='SEE'>
                <button>
                    <Eye size={17} />
                </button>
            </CatalogFormDialog>

            <CatalogFormDialog borrow={borrow} type='EDIT'>
                <button>
                    <Pencil size={17} />
                </button>
            </CatalogFormDialog>
            <DeleteDialog url={`/api/borrows/${borrow.id}`}>
                <button>
                    <Trash color="#ef4444" size={17} />
                </button>
            </DeleteDialog>
        </div>
    )
}

export default ActionButton