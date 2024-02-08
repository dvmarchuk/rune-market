import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface MarketDataRow {
    price: number;
    amount: number;
    total: number;
    type: 'buy' | 'sell';
}

const mockData: MarketDataRow[] = [
    // ... mock data
];

interface MarketRate {
    rate: number;
    direction: 'up' | 'down';
}

const currentMarketRate: MarketRate = {
    rate: 44223.74,
    direction: 'down',
};

export default function MarketData() {
    // State and logic for sorting

    // Placeholder sorting function
    const sortData = (column: keyof MarketDataRow) => {
        // Sorting logic here
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell onClick={() => sortData('price')}>Price (USD)</TableCell>
                    <TableCell onClick={() => sortData('amount')}>Amount ($BTC2)</TableCell> {/*change btc2 to $CurrentToken*/}
                    <TableCell onClick={() => sortData('total')}>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {mockData.map((row, index) => (
                    <TableRow key={index} color={row.type === 'sell' ? 'red.500' : 'green.500'}>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                        <TableCell>{row.total}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

