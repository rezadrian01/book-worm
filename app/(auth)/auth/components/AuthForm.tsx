"use client";

import React, { FC, useActionState } from 'react'
import SigninInput from './SigninInput'
import AuthTitle from './AuthTitle'
import SignupInput from './SignupInput'
import { ActionResult } from '@/lib/definition';
import { signin, signup } from '../lib/actions';
import { redirect } from 'next/navigation';

interface AuthFormProps {
    type: "SIGNIN" | "SIGNUP"
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {

    const initialState: ActionResult = {
        errorTitle: "",
        errorDesc: [],
        issues: []
    }
    const [state, formAction, isPending] = useActionState(type === "SIGNIN" ? signin : signup, initialState);

    if (state.success && type === "SIGNUP") redirect('/auth/signin');

    return (
        <form action={formAction} className='grid md:grid-cols-2 h-screen'>

            {type === "SIGNIN" && <>
                <SigninInput state={state} isPending={isPending} />
                <AuthTitle type='SIGNIN' />
            </>}

            {type === "SIGNUP" && <>
                <AuthTitle type='SIGNUP' />
                <SignupInput state={state} isPending={isPending} />
            </>}

        </form>
    )
}

export default AuthForm