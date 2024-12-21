import React, { FC } from 'react'
import AuthForm from '../components/AuthForm'


const SignupPage: FC = () => {
    return (
        <div>
            <AuthForm type='SIGNUP' />
        </div>
    )
}

export default SignupPage