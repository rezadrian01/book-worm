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
import { DialogClose } from "@radix-ui/react-dialog"
import { CircleAlert } from "lucide-react"
import { useRouter } from "next/navigation";
import { FC, useRef } from "react"

interface DeleteDialogProps {
    message?: string,
    children: React.ReactNode,
    url: string
}

const defaultMessage = "Are you certain you wish to proceed with the deletion of the selected entry?"

const DeleteDialog: FC<DeleteDialogProps> = ({ message = defaultMessage, children, url }) => {
    const router = useRouter();
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(url, {
            method: "DELETE"
        }).then(res => res.json()).then(data => {
            router.refresh();
            closeBtnRef?.current?.click();
        }).catch(err => console.log(err));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <CircleAlert color="red" />
                        Delete Confirmation
                    </DialogTitle>
                </DialogHeader>
                <div>
                    {message}
                </div>
                <DialogFooter>
                    <form className="flex gap-4" onSubmit={handleSubmit}>
                        <DialogClose asChild>
                            <Button ref={closeBtnRef} type="button" variant={'ghost'}>Cancel</Button>
                        </DialogClose>
                        <Button variant={"destructive"} type="submit">Delete</Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteDialog;