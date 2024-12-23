import React, { FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ActionResult } from '@/lib/definition'
import { CircleAlert } from 'lucide-react'
import Link from 'next/link'
import InputError from './InputError'

import blackLogo from "@/public/svg/blackLogo.svg";

interface SignupInputProps {
    isPending: boolean,
    state?: ActionResult
}

const SignupInput: FC<SignupInputProps> = ({ isPending, state }) => {
    return (
        <div className='text-center flex flex-col gap-6 h-full justify-center items-center px-6 lg:px-20'>
            <Image draggable={false} width={120} src={blackLogo} alt='Black logo' />
            <h1 className='text-3xl lg:text-5xl'>Sign Up</h1>
            <p className=''>Please provide your information to sign up.</p>
            <div className='grid sm:grid-cols-2 gap-6 md:gap-8 w-full'>
                <div className='w-full'>
                    <Input placeholder='First Name' name='firstName' id='firstName' type='text' required />
                    <InputError state={state} inputPath='firstName' />
                </div>

                <div className='w-full'>
                    <Input placeholder='Last Name' name='lastName' id='lastName' type='text' required />
                    <InputError state={state} inputPath='lastName' />
                </div>

                <div className='w-full'>
                    <Input placeholder='Contact' name='contact' id='contact' type='tel' inputMode='tel' required />
                    <InputError state={state} inputPath='contact' />
                </div>

                <div className='w-full'>
                    <Input placeholder='Email' name='email' id='email' type='email' required />
                    <InputError state={state} inputPath='email' />
                </div>

                <div className='w-full'>
                    <Input placeholder='Username' name='username' id='username' type='text' required />
                    <InputError state={state} inputPath='username' />
                </div>

                <div className='w-full'>
                    <Input placeholder='Password' name='password' id='password' type='password' required />
                    <InputError state={state} inputPath='password' />
                </div>
            </div>

            {state?.errorDesc && state.errorDesc.length > 0 && <div className='flex items-center gap-2 text-sm w-full justify-start text-red-500'>
                <CircleAlert size={15} />
                {state.errorDesc[0]}
            </div>}

            <Button disabled={isPending} type='submit' className='w-full'>{isPending ? 'Loading...' : 'Sign Up'}</Button>
            <span className='block md:hidden md:w-[18rem] mx-auto text-sm'>
                <p>Already have Account? Sign In now.</p>
                <Link href={`/auth/signin`} className={`w-full hover:underline`}>
                    Sign In
                </Link>
            </span>
        </div>
    )
}

export default SignupInput