import { Store } from 'lucide-react'
import React, { FC } from 'react'

interface BranchData {
    id: string,
    name: string
}

const BranchStatistic = () => {

    const BRANCHES_DATA: BranchData[] = [
        {
            id: "1",
            name: "Matara"
        },
        {
            id: "2",
            name: "Matara"
        },
        {
            id: "3",
            name: "Matara"
        },
        {
            id: "4",
            name: "Matara"
        },
        {
            id: "5",
            name: "Matara"
        },
        {
            id: "6",
            name: "Matara"
        },
    ]

    return (
        <div className='bg-slate-50 rounded shadow p-4 max-h-[23rem] xl:max-h-[30rem] scrollbar-hide overflow-auto'>
            <h2 className='text-center font-bold text-xl mb-4'>Branch Network</h2>
            <div className='flex flex-col gap-2'>
                {BRANCHES_DATA.map(branch => {
                    return <StatisticCard key={branch.id} {...branch} />
                })}
            </div>
        </div>
    )
}

const StatisticCard: FC<BranchData> = ({ id, name }) => {
    return <div className='border-2 border-black rounded-lg p-3 flex items-center gap-2'>
        <Store />
        <div className='border-l-2 border-l-black pl-2'>
            <h2 className='font-semibold '>{name}</h2>
            <p>Branch ID: {id}</p>
        </div>
    </div>

}

export default BranchStatistic;