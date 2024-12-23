import { Button } from '@/components/ui/button'
import React from 'react'
import { auth } from '@/auth'
import { BooksData, Chart } from './components/Chart';

import blackLogo from "@/public/svg/blackLogo.svg";
import Image from 'next/image';
import CounterStatisticAndBranchStatistic from './components/CounterStatisticAndBranchStatistic';
import BorrowersStatistic from './components/BorrowersStatistic';

const DashboardPage = async () => {
    const session = await auth();

    const BOOKS_DATA: BooksData = {
        borrow: 100,
        return: 150
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-10 max-h-screen'>
            <div className='col-span-1'>
                <Chart booksData={BOOKS_DATA} />

                <div className='bg-slate-50 rounded-lg flex gap-4 items-center p-4 max-w-[25rem] mx-auto'>
                    <Image width={45} src={blackLogo} alt='Black logo' />
                    <div className='border-l-2 border-l-[#151619] space-y-4 px-4'>
                        <div className='flex gap-4'>
                            <div className='w-6 aspect-square bg-[#3D3E3E] rounded-full' />
                            <h5>Total Borrowed Books</h5>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-6 aspect-square bg-[#151619] rounded-full' />
                            <h5>Total Returned Books</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <CounterStatisticAndBranchStatistic />
                <BorrowersStatistic />
            </div>
        </div>
    )
}

export default DashboardPage