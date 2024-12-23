import { User } from 'lucide-react'
import React, { FC } from 'react'

interface BorrowerData {
    id: string,
    name: string,
}


const BorrowersStatistic = () => {

    const BORROWERS_DATA: BorrowerData[] = [
        {
            id: "10",
            name: "Sasmith Gunasekara"
        },
        {
            id: "11",
            name: "Sasmith Gunasekara"
        },
        {
            id: "12",
            name: "Sasmith Gunasekara"
        },
        {
            id: "14",
            name: "Sasmith Gunasekara"
        },
        {
            id: "15",
            name: "Sasmith Gunasekara"
        },
    ]

    return (
        <div className='bg-slate-50 rounded shadow p-4 max-h-[40rem] scrollbar-hide overflow-auto'>
            <h2 className='text-center font-bold text-xl mb-4'>Overdue Borrowers</h2>
            <div className='flex flex-col gap-2'>
                {BORROWERS_DATA.map(borrower => {
                    return <StatisticCard key={borrower.id} {...borrower} />
                })}
            </div>
        </div>
    )
}

const StatisticCard: FC<BorrowerData> = ({ id, name }) => {
    return <div className='border-2 border-black rounded-lg p-3 flex items-center gap-2'>
        <User />
        <div className='border-l-2 border-l-black pl-2'>
            <h2 className='font-semibold '>{name}</h2>
            <p>Borrower ID: {id}</p>
        </div>
    </div>
}

export default BorrowersStatistic