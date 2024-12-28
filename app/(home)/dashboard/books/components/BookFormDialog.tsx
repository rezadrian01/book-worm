"use client";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC, useEffect, useRef, useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Book, BookType, Branch } from "@prisma/client"
import { useRouter } from "next/navigation"
import { DialogClose } from "@radix-ui/react-dialog";

interface BookFormDialogProps {
    type: "ADD" | "EDIT" | "SEE",
    children: React.ReactNode,
    book?: Book,
    branches?: Branch[],
    bookTypes?: BookType[],
}

const BookFormDialog: FC<BookFormDialogProps> = ({ type, children, book }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [bookTypes, setBookTypes] = useState<BookType[]>([]);
    const dialogCloseRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());
            let url = "/api/books";
            if (type !== "ADD" && book) {
                url += `/${book.id}`;
            }
            const response = await fetch(url, {
                method: type === "ADD" ? "POST" : "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data })
            });
            const resData = await response.json();
            router.refresh();
            dialogCloseRef?.current?.click();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const fetchBranches = () => {
            fetch("/api/branches").then(response => response.json()).then(data => setBranches(data.branches));
        }
        const fetchBookTypes = () => {
            fetch("/api/book-types").then(response => response.json()).then(data => setBookTypes(data.bookTypes));
        }
        fetchBranches();
        fetchBookTypes();
    }, []);

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{type === "ADD" ? "Add" : type === "EDIT" ? "Update" : "Detail"} Book</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={book?.title} id="title" name="title" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="author" className="text-right">
                                    Author
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={book?.author} id="author" name="author" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="stock" className="text-right">
                                    Stock
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={book?.stock} id="stock" name="stock" className="col-span-3" type="number" inputMode="numeric" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="language" className="text-right">
                                    Language
                                </Label>
                                {/* <Input id="language" name="language" className="col-span-3" required /> */}
                                <div className='col-span-3'>
                                    <Select defaultValue={book?.language} disabled={type === "SEE"} name="language" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="ENGLISH">English</SelectItem>
                                                <SelectItem value="INDONESIAN">Indonesian</SelectItem>

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="branch" className="text-right">
                                    Branch
                                </Label>
                                <div className='col-span-3'>
                                    <Select defaultValue={book?.branchId} disabled={type === "SEE"} name="branchId" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a branch" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {branches.map(branch => <SelectItem key={branch.id} value={branch.id}>{branch.name}</SelectItem>)}

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="type" className="text-right">
                                    Type
                                </Label>
                                <div className='col-span-3'>
                                    <Select defaultValue={book?.typeId} disabled={type === "SEE"} name="typeId" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a book type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {bookTypes.map(bookType => <SelectItem key={bookType.id} value={bookType.id}>{bookType.name}</SelectItem>)}

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose ref={dialogCloseRef} />
                            {type === "SEE" && <Button variant={'secondary'} type="button">Close</Button>}
                            {type !== "SEE" && <Button disabled={isLoading} type="submit">Save changes</Button>}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BookFormDialog