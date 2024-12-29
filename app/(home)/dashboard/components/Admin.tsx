import React, { FC } from 'react'
import { BooksData, Chart } from './Chart';
import Image from 'next/image'
import CounterStatisticAndBranchStatistic from './CounterStatisticAndBranchStatistic'
import BorrowersStatistic from './BorrowersStatistic';


import blackLogo from "@/public/svg/blackLogo.svg";

interface DashboardAdminPageProps {
    booksData: BooksData
}

const Admin: FC<DashboardAdminPageProps> = async ({ booksData }) => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-10 max-h-screen'>
            <div className='col-span-1'>
                <Chart booksData={booksData} />

                <div className='bg-slate-50 rounded-lg flex gap-4 items-center p-4 max-w-[25rem] mx-auto shadow'>
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

export default Admin