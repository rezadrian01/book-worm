import { User } from '@prisma/client'
import React from 'react'
import UserFormDialog from './UserFormDialog'
import { Eye, Pencil, Trash } from 'lucide-react'
import DeleteDialog from '@/app/(home)/components/DeleteDialog'

const ActionButton = ({ user }: { user: User }) => {
    return (
        <>
            <div className='flex items-center gap-4 justify-end'>
                <UserFormDialog user={user} type='SEE'>
                    <button>
                        <Eye size={17} />
                    </button>
                </UserFormDialog>
                <UserFormDialog user={user} type='EDIT'>
                    <button>
                        <Pencil size={17} />
                    </button>
                </UserFormDialog>
                <DeleteDialog url={`/api/users/${user.id}`}>
                    <button>
                        <Trash color="#ef4444" size={17} />
                    </button>
                </DeleteDialog>
            </div>
        </>
    )
}

export default ActionButton