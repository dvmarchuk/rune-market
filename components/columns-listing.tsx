"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }
//
// export const columns: ColumnDef<Payment>[] = [
//     {
//         accessorKey: "status",
//         header: "Status",
//     },
//     {
//         accessorKey: "email",
//         header: "Email",
//     },
//     {
//         accessorKey: "amount",
//         header: "Amount",
//     },
// ]

export type Payment = {
    id: string
    // icon: string
    ticker: string
    price: number
    // twentyFourHourChange: number
}

export const columns: ColumnDef<Payment>[] = [
    // {
    //     accessorKey: "icon",
    //     header: "",
    // },
    {
        accessorKey: "ticker",
        header: "Ticker",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
]
