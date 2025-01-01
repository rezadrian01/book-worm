import { Borrow } from '@prisma/client'
import React, { FC } from 'react'

interface ActionButtonProps {
    borrow: Borrow
}

const ActionButton: FC<ActionButtonProps> = ({ borrow }) => {
    return (
        <div>ActionButton</div>
    )
}

export default ActionButton