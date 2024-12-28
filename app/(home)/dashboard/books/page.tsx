import { Button } from '@/components/ui/button'
import React from 'react'
import { CirclePlus, Search } from 'lucide-react';
import BookFormDialog from './components/BookFormDialog';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './components/columns';
import { BookType, Branch } from '@prisma/client';
import { BookWithRelations } from '@/app/lib/definition';


const BookPage = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/books`);
    const data = await response.json();
    const books: BookWithRelations[] = data.books;

    const responseBranch = await fetch(`${process.env.BASE_URL}/api/branches`);
    const dataBranch = await responseBranch.json();
    const branches: Branch[] = dataBranch.branches;

    const responseBookTypes = await fetch(`${process.env.BASE_URL}/api/book-types`);
    const dataBookTypes = await responseBookTypes.json();
    const bookTypes: BookType[] = dataBookTypes.bookTypes;

    return (
        <div className='p-10 space-y-10'>

            {/* Header */}
            <header className='flex justify-between'>
                <div className='flex gap-4'>
                    <h2 className='text-3xl font-semibold'>Book Management</h2>
                </div>
                <div className='flex gap-4'>
                    <BookFormDialog branches={branches} type='ADD' bookTypes={bookTypes}>
                        <Button>
                            <CirclePlus />
                            Add Book
                        </Button>
                    </BookFormDialog>
                    {/* <div className='relative'>
                        <Input value={searchInput} onChange={({ target }) => setSearchInput(target.value)} type='text' name='search' placeholder='Search by ID...' />
                        <button onClick={handleSearchClick} className='absolute top-[.6rem] right-2'>
                            <Search size={15} />
                        </button>
                    </div> */}
                </div>
            </header>

            {/* Main  */}
            <main>
                <DataTable columns={columns} data={books} />
            </main>
        </div>
    )
}

export default BookPage