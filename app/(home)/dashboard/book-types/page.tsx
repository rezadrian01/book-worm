import React from 'react'
import BookTypeFormDialog from './components/BookTypeFormDialog'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './components/columns'

const BookTypesPage = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/book-types`);
    const data = await response.json();
    const bookTypes = data.bookTypes;
    return (
        <div className='p-10 space-y-10'>

            {/* Header */}
            <header className='flex justify-between'>
                <div className='flex gap-4'>
                    <h2 className='text-3xl font-semibold'>Book Type Management</h2>
                </div>
                <div className='flex gap-4'>
                    <BookTypeFormDialog type='ADD'>
                        <Button>
                            <CirclePlus />
                            Add Book Type
                        </Button>
                    </BookTypeFormDialog>
                </div>
            </header>

            {/* Main  */}
            <main>
                <DataTable columns={columns} data={bookTypes} />
            </main>
        </div>
    )
}

export default BookTypesPage
