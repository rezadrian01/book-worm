"use client"

import { Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { FC } from "react"

const chartConfig = {
    books: {
        label: "Books"
    },
    borrow: {
        label: "Borrowed",
        color: "#3D3E3E",
    },
    return: {
        label: "Returned",
        color: "#151619",

    },
} satisfies ChartConfig

export interface BooksData {
    borrow: number,
    return: number
}

interface ChartProps {
    booksData: BooksData
}

export const Chart: FC<ChartProps> = ({ booksData }) => {

    const chartData = [
        { status: "borrow", books: booksData.borrow, fill: "var(--color-borrow)" },
        { status: "return", books: booksData.return, fill: "var(--color-return)" },
    ]


    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[45rem]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie data={chartData} dataKey="books" nameKey="status" />
            </PieChart>
        </ChartContainer>
    )
}
