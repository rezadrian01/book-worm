

import { auth } from '@/auth'
import { getHoursAndDate } from '@/lib/utils';
import { Settings, UserRound } from 'lucide-react'
import React from 'react'
import { SettingButton } from './SettingButton';

const UserInfo = async () => {

    const session = await auth();
    const { currentTime, formatedDate } = getHoursAndDate();

    return (
        <div className='border w-full p-4 flex justify-between text-sm'>
            <div className='flex gap-2 items-center'>
                <UserRound size={30} />
                <div className=''>
                    <h3 className='font-semibold'>{session?.user?.email}</h3>
                    <p>Admin</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='text-right border-r-2 border-r-black pr-4'>
                    <h3 className='font-semibold'>{currentTime}</h3>
                    <p>{formatedDate}</p>
                </div>
                <SettingButton />
            </div>
        </div>
    )
}

export default UserInfo