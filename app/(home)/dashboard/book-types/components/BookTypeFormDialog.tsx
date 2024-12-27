"use client";

import React, { FC } from 'react';
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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import { DialogClose } from '@radix-ui/react-dialog';
import { BookType } from '@prisma/client';



interface BookTypeFormDialogProps {
    type: "ADD" | "EDIT" | "SEE",
    children: React.ReactNode,
    bookType?: BookType
}

const BookTypeFormDialog: FC<BookTypeFormDialogProps> = ({ children, type, bookType }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();
    const dialogCloseRef = React.useRef<HTMLButtonElement>(null);

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());
            let url = "/api/book-types";
            if (type !== "ADD" && bookType) {
                url += `/${bookType.id}`;
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

        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{type === "ADD" ? "Add" : "Update"} Book Type</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Book Type
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={bookType?.name} id="name" name="name" className="col-span-3" required />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose ref={dialogCloseRef} />
                            {type === "SEE" && <Button type='button' onClick={() => dialogCloseRef?.current?.click()}>Close</Button>}
                            {type !== "SEE" && <Button type="submit">Save changes</Button>}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BookTypeFormDialog