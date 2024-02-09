import React, {useEffect, useMemo, useState} from 'react';
import {DataTable} from "@/components/listing-table";
import {Bid, columnsBidTable, Payment} from "@/components/columns-listing";
import {BuySellTable} from "@/components/table-buy-sell";
import {Button} from "@/components/ui/button";

async function getData(): Promise<Bid[]> {
    const response = await fetch('https://runepro-psbt.onrender.com/listings');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}



export default async function MarketData() {
    const sortedData = await getData().then(data =>
        data.sort((a, b) => a.type.localeCompare(b.type))
    );

    // Add custom rows
    const dataWithCustomRows = [];
    let previousType = null;
    for (let i = 0; i < sortedData.length; i++) {
        const item = sortedData[i];
        if (i !== 0 && item.type !== previousType) {
            // Add a custom row
            dataWithCustomRows.push({
                _id: 'custom',
                type: 'custom',
                tick: '',
                amount: null,
                price: null,
                owner: '',
                // Add any other custom properties you need
            });
        }
        previousType = item.type;
        dataWithCustomRows.push(item);
    }

    return (
        <main>
            <div>
                <BuySellTable columns={columnsBidTable} data={dataWithCustomRows}/>
            </div>
        </main>

    );
};