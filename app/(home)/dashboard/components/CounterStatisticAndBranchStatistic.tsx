import { BookCopy, Store, User } from 'lucide-react';
import React, { FC, JSX } from 'react';
import BranchStatistic from './BranchStatistic';

interface CounterData {
    id: string,
    total: number,
    title: string,
    icon?: React.ReactNode
}



const CounterStatisticAndBranchStatistic = () => {

    const COUNTER_DATA: CounterData[] = [
        {
            id: "1",
            total: 150,
            title: "Total User Base",
            icon: <User />
        },
        {
            id: "2",
            total: 1500,
            title: "Total Book Count",
            icon: <BookCopy />
        },
        {
            id: "3",
            total: 10,
            title: "Total Branch Count",
            icon: <Store />
        },
    ]

    return (
        <div className='flex flex-col gap-6 mt-6 lg:mt-0'>
            <div className='flex lg:justify-end w-full'>
                <div className='w-[20rem] flex flex-col gap-4'>
                    {COUNTER_DATA.map(data => {
                        return <StatisticCard key={data.id} {...data} />
                    })}
                </div>
            </div>
            <BranchStatistic />
        </div>
    )
}

const StatisticCard: FC<CounterData> = ({ id, title, total, icon }) => {
    return <div className='bg-slate-50 shadow rounded p-3 flex items-center gap-2'>
        {icon}
        <div className='border-l-2 border-l-black pl-2'>
            <h2 className='font-semibold text-xl'>{total}</h2>
            <h3>{title}</h3>
        </div>
    </div>
}

export default CounterStatisticAndBranchStatistic