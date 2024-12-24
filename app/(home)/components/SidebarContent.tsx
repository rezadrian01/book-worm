"use client";

import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { ADMIN_SIDEBAR_CONTENT } from '../constants/sidebarContent'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const SidebarContent = () => {
    const pathname = usePathname();
    return (
        <nav className='w-full'>
            <ul className='flex flex-col items-center gap-6 text-lg w-full'>
                {ADMIN_SIDEBAR_CONTENT.map(content => {
                    return <Link href={content.href} className={`flex gap-4 w-full ${buttonVariants({ variant: pathname === content.href ? 'secondary' : 'ghost' })}`} key={content.id}>
                        <content.icon />
                        <li className={`w-full`}>{content.title}</li>
                    </Link>
                })}
            </ul>
        </nav>
    )
}

export default SidebarContent