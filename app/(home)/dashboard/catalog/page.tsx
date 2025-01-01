'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import { columns as adminColumns } from './components/AdminColumns';
import { columns as borrowerColumns } from './components/BorrowerColumns';
import { BorrowWithRelations } from '@/app/lib/definition';


const CatalogPage = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
    const [searchInput, setSearchInput] = useState<string>("");
    const [borrows, setBorrows] = useState<BorrowWithRelations[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const isAdmin = true;

    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/borrows`);
                const data = await response.json();
                const borrows: BorrowWithRelations[] = data.borrows;
                setBorrows(borrows);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const handleSearchClick = () => {
        console.log(searchInput);
    }

    return (
        <div className='p-10 space-y-10'>

            {/* Header */}
            <header className='flex justify-between'>
                <div className='flex gap-4'>
                    <Button onClick={() => setSelectedCategoryIndex(0)} variant={selectedCategoryIndex === 0 ? 'default' : 'ghost'}>Borrowed Books</Button>
                    <Button onClick={() => setSelectedCategoryIndex(1)} variant={selectedCategoryIndex === 1 ? 'default' : 'ghost'}>Overdue Borrowers</Button>
                </div>
                <div>
                    <div className='relative'>
                        <Input value={searchInput} onChange={({ target }) => setSearchInput(target.value)} type='text' name='search' placeholder='Search by ID...' />
                        <button onClick={handleSearchClick} className='absolute top-[.6rem] right-2'>
                            <Search size={15} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main>
                <DataTable columns={isAdmin ? adminColumns : borrowerColumns} data={borrows} />
            </main>
        </div>
    )
}

export default CatalogPage