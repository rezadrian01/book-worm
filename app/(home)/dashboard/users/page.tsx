import { DataTable } from '@/components/ui/data-table'
import React from 'react'
import { columns } from './components/columns'
import UserFormDialog from './components/UserFormDialog';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';

const UsersPage = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/users`);
    const data = await response.json();
    const users = data.users;
    return (
        <div className='p-10 space-y-10'>

            {/* Header */}
            <header className='flex justify-between'>
                <div className='flex gap-4'>
                    <h2 className='text-3xl font-semibold'>User Management</h2>
                </div>
                <div className='flex gap-4'>
                    <UserFormDialog type='ADD'>
                        <Button>
                            <CirclePlus />
                            Add User
                        </Button>
                    </UserFormDialog>
                    <div className='relative'>
                    </div>
                </div>
            </header>

            {/* Main  */}
            <main>
                <DataTable columns={columns} data={users} />
            </main>
        </div>
    )
}

export default UsersPage