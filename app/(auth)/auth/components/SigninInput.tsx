import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SigninInput = () => {
    return (
        <div className='text-center flex flex-col gap-6 h-full justify-center items-center px-6 sm:px-20'>
            <h1 className='text-3xl lg:text-5xl'>Welcome Back !!</h1>
            <p className=''>Please enter your credentials to login</p>
            <Input placeholder='Username' name='username' id='username' type='text' required />
            <Input placeholder='Password' name='password' id='password' type='password' required />
            <Button type='submit' className='w-full'>Sign In</Button>
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