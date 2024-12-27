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
import { Branch } from "@prisma/client"
import { DialogClose } from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react"

interface BranchFormDialogProps {
    type: "ADD" | "EDIT" | "SEE",
    branch?: Branch,
    children: React.ReactNode
}

const BranchFormDialog: FC<BranchFormDialogProps> = ({ type, branch, children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const dialogCloseRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = async (e: any) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());

            let url = "/api/branches";
            if (type !== "ADD") {
                url += `/${branch?.id}`;
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
                        <DialogTitle>{type === "ADD" ? "Add" : type === "EDIT" ? "Update" : "Detail"} Branch</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.name} name="name" id="name" className="col-span-3" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contact" className="text-right">
                                    Contact
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.contact} name="contact" id="contact" className="col-span-3" inputMode="numeric" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="location" className="text-right">
                                    Location
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.location} name="location" id="location" className="col-span-3" required />
                            </div>
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

export default BranchFormDialog