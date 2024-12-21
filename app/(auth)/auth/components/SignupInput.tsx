import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SignupInput = () => {
    return (
        <div className='text-center flex flex-col gap-6 h-full justify-center items-center px-6 lg:px-20'>
            <h1 className='text-3xl lg:text-5xl'>Sign Up</h1>
            <p className=''>Please provide your information to sign up.</p>
            <div className='grid sm:grid-cols-2 gap-6 md:gap-8 w-full'>
                <Input placeholder='First Name' name='firstName' id='firstName' type='text' required />
                <Input placeholder='Last Name' name='lastName' id='lastName' type='text' required />

                <Input placeholder='Contact' name='contact' id='contact' type='tel' inputMode='tel' required />
                <Input placeholder='Email' name='email' id='email' type='email' required />

                <Input placeholder='Username' name='username' id='username' type='text' required />
                <Input placeholder='Password' name='password' id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>Sign Up</Button>
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