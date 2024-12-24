'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CirclePlus, Eye, Pencil, Search, Trash } from 'lucide-react';
import BranchFormDialog from './components/BranchFormDialog';
import DeleteDialog from '../../components/DeleteDialog';
import { Branch } from '@prisma/client';


const BranchPage = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [branches, setBranches] = useState<Branch[]>([]);

    useEffect(() => {
        fetch("/api/branches").then(res => res.json()).then(data => setBranches(data.branches)).catch(err => console.log(err));
    }, [])

    const DUMMY_DATA = [
        {
            id: "1",
            name: "BookWorm Matara",
            contact: "0812345678",
            location: 'Matara',
        },
        {
            id: "2",
            name: "BookWorm Matara",
            contact: "0812345678",
            location: 'Matara',
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
                        <Input value={searchInput} onChange={({ target }) => setSearchInput(target.value)} type='text' name='search' placeholder='Search by ID or Name' />
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
                            <TableHead className="w-[100px] font-bold">#</TableHead>
                            <TableHead className='font-bold'>Name</TableHead>
                            <TableHead className='font-bold'>Contact</TableHead>
                            <TableHead className="text-right font-bold">Location</TableHead>
                            <TableHead className="text-right font-bold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {branches.map((branch, index) => {
                            return <TableRow key={branch.id}>
                                <TableCell className="font-medium py-4">{++index}.</TableCell>
                                <TableCell className='py-4'>{branch.name}</TableCell>
                                <TableCell className='py-4'>{branch.contact}</TableCell>
                                <TableCell className="text-right py-4">{branch.location}</TableCell>
                                <TableCell className="text-right py-4 ">
                                    <ActionButton branch={branch} />
                                </TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>

            </main>
        </div>
    )
}

const ActionButton = ({ branch }: { branch: Branch }) => {
    return <div className='flex items-center gap-4 justify-end'>
        <BranchFormDialog branch={branch} type='SEE'>
            <button>
                <Eye size={17} />
            </button>
        </BranchFormDialog>
        <BranchFormDialog branch={branch} type='EDIT'>
            <button>
                <Pencil size={17} />
            </button>
        </BranchFormDialog>
        <DeleteDialog url={`/api/branches/${branch.id}`}>
            <button>
                <Trash size={17} />
            </button>
        </DeleteDialog>
    </div>
}

export default BranchPage