import React from 'react'
import { auth } from '@/auth'
import { BooksData } from './components/Chart';
import Admin from './components/Admin';
import Borrower from './components/Borrower';



const DashboardPage = async () => {
    const session = await auth();
    const BOOKS_DATA: BooksData = {
        borrow: 100,
        return: 150
    }
    const isAdmin = false;

    return <>
        {isAdmin && <Admin booksData={BOOKS_DATA} />}
        {!isAdmin && <Borrower booksData={BOOKS_DATA} />}
    </>
}

export default DashboardPage