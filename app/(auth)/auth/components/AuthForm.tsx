import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { FC } from 'react'
import SigninInput from './SigninInput'
import AuthTitle from './AuthTitle'
import SignupInput from './SignupInput'

interface AuthFormProps {
    type: "SIGNIN" | "SIGNUP"
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
    return (
        <form className='grid md:grid-cols-2 h-screen'>

            {type === "SIGNIN" && <>
                <SigninInput />
                <AuthTitle type='SIGNIN' />
            </>}

            {type === "SIGNUP" && <>
                <AuthTitle type='SIGNUP' />
                <SignupInput />
            </>}

        </form>
    )
}

export default AuthForm