import { Button } from '@/components/ui/button'
import React from 'react'
import { auth } from '@/auth'
import { signout } from '../../(auth)/auth/lib/actions';

const DashboardPage = async () => {
    const session = await auth();
    return (
        <div className='h-[200vh]'>
            DashboardPage
            <form action={async () => {
                "use server";

                await signout();
            }
            }>
                <Button>Sign Out</Button>
            </form>
        </div>
    )
}

export default DashboardPage