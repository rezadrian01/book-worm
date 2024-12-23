import React from 'react'

import whiteLogo from "@/public/svg/whiteLogo.svg"
import Image from 'next/image'
import { auth } from '@/auth'
import SidebarContent from './SidebarContent';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signout } from '@/app/(auth)/auth/lib/actions';

const Sidebar = async () => {
    const session = await auth();
    return (
        <div className='flex flex-col justify-between py-10 grow-0 bg-black w-[15rem] h-screen text-white fixed'>
            <div className='flex flex-col items-center gap-10'>
                <header className='flex flex-col items-center'>
                    <Image width={50} src={whiteLogo} alt="White logo" />
                    <h2 className='text-3xl mt-4'>Book Worm</h2>
                    <p className='tracking-wider'>Library</p>
                </header>
                <SidebarContent />
            </div>
            <form className='w-full' action={signout}>
                <Button className='justify-start w-full' variant={'ghost'}>
                    <LogOut />
                    Signout
                </Button>
            </form>
        </div>
    )
}

export default Sidebar