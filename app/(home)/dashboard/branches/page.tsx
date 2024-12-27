
import { Button } from '@/components/ui/button'
import React from 'react'
import { CirclePlus, Eye, Pencil, Search, Trash } from 'lucide-react';
import BranchFormDialog from './components/BranchFormDialog';
import DeleteDialog from '../../components/DeleteDialog';
import { Branch } from '@prisma/client';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './components/columns';


const BranchPage = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/branches`, { next: { tags: ['branches'] } })
    const data = await response.json();
    const branches: Branch[] = data.branches;

    return (
        <div className='p-10 space-y-10'>

            {/* Header */}
            <header className='flex justify-between'>
                <div className='flex gap-4'>
                    <h2 className='text-3xl font-semibold'>Branch Management</h2>
                </div>
                <div className='flex gap-4'>
                    <BranchFormDialog type='ADD'>
                        <Button >
                            <CirclePlus />
                            Add Branch
                        </Button>
                    </BranchFormDialog>
                    <div className='relative'>
                    </div>
                </div>
            </header>

            {/* Main  */}
            <main>
                <DataTable columns={columns} data={branches} />
            </main>
        </div>
    )
}


export default BranchPage