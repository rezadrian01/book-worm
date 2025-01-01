import { BorrowWithRelations } from '@/app/lib/definition'
import React, { FC } from 'react'

interface BorrowerActionProps {
    borrow: BorrowWithRelations
}

const BorrowerActionButton: FC<BorrowerActionProps> = ({ borrow }) => {
    return (
        <div>BorrowerActionButton</div>
    )
}

export default BorrowerActionButton