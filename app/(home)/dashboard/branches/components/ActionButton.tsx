"use client"

import { Eye, Pencil, Trash } from "lucide-react";
import BranchFormDialog from "./BranchFormDialog";
import DeleteDialog from "@/app/(home)/components/DeleteDialog";
import { Branch } from "@prisma/client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ActionButton = ({ branch }: { branch: Branch }) => {
    return <>
        <div className='flex items-center gap-4 justify-end'>
            <BranchFormDialog branch={branch} type='SEE'>
                <button>
                    <Eye size={17} />
                </button>
            </BranchFormDialog>

            <BranchFormDialog branch={branch} type='EDIT'>
                <button>
                    <Pencil size={17} />
                </button>
            </BranchFormDialog>
            <DeleteDialog url={`/api/branches/${branch.id}`}>
                <button>
                    <Trash color="#ef4444" size={17} />
                </button>
            </DeleteDialog>
        </div>
    </>
}

export default ActionButton;