import React, { FC } from 'react'
import { BooksData, Chart } from './Chart'
import Image from 'next/image';
import { BookOpenText, Undo2, CircleFadingPlus } from 'lucide-react';

import blackLogo from "@/public/svg/blackLogo.svg";

interface BorrowerDashboardPageProps {
    booksData: BooksData
}

const Borrower: FC<BorrowerDashboardPageProps> = ({ booksData }) => {
    return (
        <div className='p-10 max-h-screen grid grid-cols-8'>
            <div className='flex flex-col justify-between col-span-5 h-full'>
                <div className=' flex flex-col gap-4'>
                    <div className='grid grid-cols-6 gap-8'>
                        <div className='col-span-3 bg-slate-50 rounded p-4 flex items-center gap-2 shadow'>
                            <span className='border-r-black border-r-2 h-full mr-2' />
                            <div className='bg-gray-200 p-4'>
                                <BookOpenText size={40} />
                            </div>
                            <h2 className='font-bold text-2xl'>Your Borrowed Book List</h2>
                        </div>
                        <div className='col-span-3 bg-slate-50 rounded p-4 flex items-center gap-2 shadow'>
                            <span className='border-r-black border-r-2 h-full mr-2' />
                            <div className='bg-gray-200 p-4'>
                                <Undo2 size={40} />
                            </div>
                            <h2 className='font-bold text-2xl'>Your Returned Book List</h2>
                        </div>
                        <div className='col-span-4 bg-slate-50 rounded p-4 flex items-center gap-2 shadow'>
                            <span className='border-r-black border-r-2 h-full mr-2' />
                            <div className='bg-gray-200 p-4'>
                                <Undo2 size={40} />
                            </div>
                            <h2 className='font-bold text-2xl'>Let's Browse available Book Inventory</h2>
                        </div>
                        <div className='col-span-2 flex flex-col items-center justify-center'>
                            <Image draggable={false} src={blackLogo} alt='Black logo' />
                            <h2 className='text-3xl mt-4'>Book Worm</h2>
                            <p className='tracking-wider'>Library</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 flex flex-col justify-between p-10 bg-slate-50 shadow rounded'>
                    <div className='mb-10'>
                        <p className='font-semibold text-2xl'>"Embarking on the journey of reading fosters personal growth, nurturing a path towards excellence and the refinement of character."</p>
                    </div>
                    <div className='flex justify-end'>
                        <p>
                            - BookWorm Team -
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <Chart booksData={booksData} />
                <div className='bg-slate-50 rounded-lg flex gap-4 items-center p-4 max-w-[25rem] mx-auto shadow'>
                    <Image draggable={false} width={45} src={blackLogo} alt='Black logo' />
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
        </div >
    )
}

export default Borrower