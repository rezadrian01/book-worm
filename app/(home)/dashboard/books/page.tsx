'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CirclePlus, Search } from 'lucide-react';
import BookFormDialog from './components/BookFormDialog';


const BookPage = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const DUMMY_DATA = [
        {
            id: "1",
            title: "Rembulan Tenggelam di Wajahmu",
            type: "Fiction",
            language: 'Indonesian',
            stock: 10
        },
        {
            id: "2",
            title: "Atomic Habits",
            type: "Self Improvement",
            language: 'Indonesian',
            stock: 10
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
                    <h2 className='text-3xl font-semibold'>Book Management</h2>
                </div>
                <div className='flex gap-4'>
                    <BookFormDialog type='ADD' />
                    <div className='relative'>
                        <Input value={searchInput} onChange={({ target }) => setSearchInput(target.value)} type='text' name='search' placeholder='Search by ID...' />
                        <button onClick={handleSearchClick} className='absolute top-[.6rem] right-2'>
                            <Search size={15} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main  */}
            <main>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] font-bold">ID</TableHead>
                            <TableHead className='font-bold'>Title</TableHead>
                            <TableHead className='font-bold'>Type</TableHead>
                            <TableHead className="text-right font-bold">Language</TableHead>
                            <TableHead className="text-right font-bold">Availability</TableHead>
                            <TableHead className="text-right font-bold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_DATA.map(borrow => {
                            return <TableRow key={borrow.id}>
                                <TableCell className="font-medium py-4">{borrow.id}</TableCell>
                                <TableCell className='py-4'>{borrow.title}</TableCell>
                                <TableCell className='py-4'>{borrow.type}</TableCell>
                                <TableCell className="text-right py-4">{borrow.language}</TableCell>
                                <TableCell className="text-right py-4">{borrow.stock > 0 ? "Available" : "Not Available"}</TableCell>
                                <TableCell className="text-right py-4">Action</TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>

            </main>
        </div>
    )
}

export default BookPage