import { ActionResult } from '@/lib/definition'
import React, { FC } from 'react'

interface InputErrorProps {
    state?: ActionResult,
    inputPath: string
}

const InputError: FC<InputErrorProps> = ({ state, inputPath }) => {
    return (
        <>
            {state?.issues?.findIndex(issue => issue.path === inputPath) !== -1 && <p className='flex justify-start text-red-500 text-sm mt-2'>{state?.issues?.find(issue => issue.path === inputPath)?.message}</p>}
        </>
    )
}

export default InputError