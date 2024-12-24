'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useMemo, useState } from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Search } from 'lucide-react';


const CatalogPage = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
    const [searchInput, setSearchInput] = useState<string>("");

    const DUMMY_DATA = [
        {
            id: "1",
            userId: "u1",
            book: {
                title: "Rembulan Tenggelam di Wajahmu"
            },
            dueDate: '13-01-2025',
            createdAt: "01-01-2025"
        },
        {
            id: "2",
            userId: "u2",
            book: {
                title: "Rembulan Tenggelam di Wajahmu"
            },
            dueDate: '13-01-2025',
            createdAt: "01-01-2025"
        },
    ]

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
            <main>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-bold">ID</TableHead>
                            <TableHead className='font-bold'>User ID</TableHead>
                            <TableHead className='font-bold'>Book Title</TableHead>
                            <TableHead className="text-right font-bold">Due Date</TableHead>
                            <TableHead className="text-right font-bold">Borrow Date</TableHead>
                            <TableHead className="text-right font-bold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_DATA.map(borrow => {
                            return <TableRow key={borrow.id}>
                                <TableCell className="font-medium py-4">{borrow.id}</TableCell>
                                <TableCell className='py-4'>{borrow.userId}</TableCell>
                                <TableCell className='py-4'>{borrow.book.title}</TableCell>
                                <TableCell className="text-right py-4">{borrow.dueDate}</TableCell>
                                <TableCell className="text-right py-4">{borrow.createdAt}</TableCell>
                                <TableCell className="text-right py-4">Action</TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>

            </main>
        </div>
    )
}

export default CatalogPage