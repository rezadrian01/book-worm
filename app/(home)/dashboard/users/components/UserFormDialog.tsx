"use client";

import { User } from '@prisma/client'
import React, { FC, useRef, useState } from 'react'


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
import { DialogClose } from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface UserFormDialogProps {
    type: "ADD" | "EDIT" | "SEE",
    user?: User,
    children: React.ReactNode
}

const UserFormDialog: FC<UserFormDialogProps> = ({ user, children, type }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dialogCloseRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());

            let url = "/api/users";
            if (type !== "ADD") {
                url += `/${user?.id}`;
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
            console.log(error)
        }
        finally {
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
                        <DialogTitle>{type === "ADD" ? "Add" : type === "EDIT" ? "Update" : "Detail"} User</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={user?.username} name="username" id="username" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="firstName" className="text-right">
                                    First Name
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={user?.firstName} name="firstName" id="firstName" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="lastName" className="text-right">
                                    Last Name
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={user?.lastName} name="lastName" id="lastName" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={user?.email} name="email" id="email" className="col-span-3" type='email' required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contact" className="text-right">
                                    Contact
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={user?.contact} name="contact" id="contact" className="col-span-3" inputMode='numeric' required />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contact" className="text-right">
                                    Role
                                </Label>
                                <div className='col-span-3'>
                                    <Select disabled={type !== "ADD"} name="role" defaultValue={user?.role} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="ADMIN">Admin</SelectItem>
                                                <SelectItem value="BORROWER">Borrower</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {type === "ADD" && <>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                        Password
                                    </Label>
                                    <Input name="password" id="password" className="col-span-3" type='password' required />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="confirmPassword" className="text-right">
                                        Confirm Password
                                    </Label>
                                    <Input name="confirmPassword" id="confirmPassword" className="col-span-3" type='password' required />
                                </div>
                            </>}

                        </div>
                        <DialogFooter>
                            <DialogClose ref={dialogCloseRef} />

                            {
                                type === "SEE" && <DialogClose asChild>
                                    <Button>Close</Button>
                                </DialogClose>
                            }
                            {
                                type !== "SEE" && <Button disabled={isLoading} type="submit">{isLoading ? "Loading..." : "Save changes"}</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UserFormDialog