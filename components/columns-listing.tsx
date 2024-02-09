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

function TruncatedText({ text }: { text: string }) {
    const truncatedText = `${text.slice(0, 4)}...${text.slice(-8)}`;

    return (
        <div title={text}>
            {truncatedText}
        </div>
    );
}

export type Payment = {
    id: string
    // icon: string
    ticker: string
    price: number
    // twentyFourHourChange: number
}

export type Bid = {
    _id: string
    type: string
    tick: string
    amount: number | null
    price: number | null
    owner: string
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

export const columnsBidTable: ColumnDef<Bid>[] = [
    {
        accessorKey: "tick",
        header: "Ticker",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "owner",
        header: "Owner",
        cell: ({ row }) => <TruncatedText text={row.original.owner} />,

    },
]
// {'_id' : '1234abcd',    'tick' : 'sats',    'amount' : 50,    'price' : 2000,   'owner' : 'tb1pjhfjsshs8zyjhtzgrj54mk5sknpc522pjud56cdrg2vze94vfdesuk4r8j'},

