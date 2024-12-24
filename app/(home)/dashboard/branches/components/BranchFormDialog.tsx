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
import { CirclePlus } from "lucide-react"
import { FC } from "react"

interface BranchFormDialogProps {
    type: "ADD" | "EDIT" | "SEE",
    branch?: Branch,
    children: React.ReactNode
}

const BranchFormDialog: FC<BranchFormDialogProps> = ({ type, branch, children }) => {
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
                    <form>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.name} name="name" id="name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contact" className="text-right">
                                    Contact
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.contact} name="contact" id="contact" className="col-span-3" inputMode="numeric" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="location" className="text-right">
                                    Location
                                </Label>
                                <Input disabled={type === "SEE"} defaultValue={branch?.location} name="location" id="location" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>

                            {
                                type === "SEE" && <DialogClose asChild>
                                    <Button>Close</Button>
                                </DialogClose>
                            }
                            {
                                type !== "SEE" && <Button type="submit">Save changes</Button>
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BranchFormDialog