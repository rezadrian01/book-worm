import { BookCopy, BookText, LayoutDashboard, Store, Tag, Users } from "lucide-react";
const ADMIN_SIDEBAR_CONTENT = [
    {
        id: 1,
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        id: 2,
        title: "Catalog",
        href: "/dashboard/catalog",
        icon: Tag
    },
    {
        id: 3,
        title: "Books",
        href: "/dashboard/books",
        icon: BookCopy
    },
    {
        id: 4,
        title: "Users",
        href: "/dashboard/users",
        icon: Users
    },
    {
        id: 5,
        title: "Branches",
        href: "/dashboard/branches",
        icon: Store
    },
]

const BORROWER_SIDEBAR_CONTENT = [
    {
        id: 1,
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        id: 2,
        title: "Catalog",
        href: "/dashboard/catalog",
        icon: Tag
    },
    {
        id: 3,
        title: "Books",
        href: "/dashboard/books",
        icon: BookCopy
    },
]

export { ADMIN_SIDEBAR_CONTENT, BORROWER_SIDEBAR_CONTENT }