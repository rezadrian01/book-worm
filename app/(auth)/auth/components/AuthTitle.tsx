import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { FC } from 'react'

interface AuthTitleProps {
    type: "SIGNIN" | "SIGNUP"
}

const AuthTitle: FC<AuthTitleProps> = ({ type }) => {
    return (
        <div className={cn('hidden md:flex h-full bg-black text-white text-center flex-col justify-center items-center gap-6', type === "SIGNIN" ? "rounded-l-[5rem]" : "rounded-r-[5rem]")}>
            <span className='space-y-2'>
                <h1 className='text-6xl'>Book Worm</h1>
                <p className='text-xl'>LIBRARY</p>
            </span>
            <span className='mt-20 space-y-4 w-[18rem] mx-auto'>
                <p>{type === "SIGNIN" ? "New to our platform? Sign Up now." : "Already have Account? Sign In now."}</p>
                <Link href={`/auth/${type === "SIGNIN" ? "signup" : "signin"}`} className={`${buttonVariants({ variant: "outline" })} bg-black w-full`}>
                    {type === "SIGNIN" ? "Sign Up" : "Sign In"}
                </Link>
            </span>
        </div>
    )
}

export default AuthTitle