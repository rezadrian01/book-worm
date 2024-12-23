import { Button } from '@/components/ui/button'
import React from 'react'
import { auth } from '@/auth'

const DashboardPage = async () => {
    const session = await auth();
    return (
        <div className=''>
            DashboardPage

        </div>
    )
}

export default DashboardPage