import React, { FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ActionResult } from '@/lib/definition'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import InputError from './InputError'

import blackLogo from "@/public/svg/blackLogo.svg";

interface SigninInputProps {
    isPending: boolean,
    state?: ActionResult
}

const SigninInput: FC<SigninInputProps> = ({ isPending, state }) => {
    return (
        <div className='text-center flex flex-col gap-6 h-full justify-center items-center px-6 sm:px-20'>
            <Image draggable={false} width={120} src={blackLogo} alt='Black logo' />
            <h1 className='text-3xl lg:text-5xl'>Welcome Back !!</h1>
            <p className=''>Please enter your credentials to login</p>

            <div className='w-full'>
                <Input placeholder='Username' name='username' id='username' type='text' required />
                <InputError state={state} inputPath='username' />
            </div>

            <div className='w-full'>
                <Input placeholder='Password' name='password' id='password' type='password' required />
                <InputError state={state} inputPath='password' />
            </div>

            {state?.errorDesc && state.errorDesc.length > 0 && <div className='flex items-center gap-2 text-sm w-full justify-start text-red-500'>
                <CircleAlert size={15} />
                {state.errorDesc[0]}
            </div>}

            <Button disabled={isPending} type='submit' className='w-full'>{isPending ? 'Loading...' : 'Sign In'}</Button>
            <span className='block md:hidden md:w-[18rem] mx-auto text-sm'>
                <p className=''>New to our platform? Sign Up now.</p>
                <Link href={`/auth/signup`} className={`w-full hover:underline`}>
                    Sign Up
                </Link>
            </span>
        </div>
    )
}

export default SigninInput