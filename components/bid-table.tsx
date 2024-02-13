"use client"

import React, {useEffect, useState} from 'react';
import {Bid, columnsBidTable} from "@/components/columns-listing";
import {BuySellTable} from "@/components/table-buy-sell";
import {Button} from "@/components/ui/button";
import CardComponent from "@/components/listing-card";

async function getData(): Promise<Bid[]> {
    const response = await fetch('https://runepro-psbt.onrender.com/listings');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}


export default function MarketData() {
    const [dataWithCustomRows, setDataWithCustomRows] = useState([]);
    const [isCardComponentVisible, setIsCardComponentVisible] = useState(true);
    const [displayType, setDisplayType] = useState('all'); // Add this line

    useEffect(() => {
        getData().then(data => {
            const sortedData = data.sort((a, b) => a.type.localeCompare(b.type));
            const dataWithCustomRows = [];
            let previousType = null;
            for (let i = 0; i < sortedData.length; i++) {
                const item = sortedData[i];
                // if (i !== 0 && item.type !== previousType) {
                //     dataWithCustomRows.push({
                //         _id: 'custom',
                //         type: 'custom',
                //         tick: '',
                //         amount: null,
                //         price: null,
                //         owner: '',
                //     });
                // }
                previousType = item.type;
                dataWithCustomRows.push(item);
            }
            {/*@ts-ignore*/}
            setDataWithCustomRows(dataWithCustomRows);
        });
    }, []);
    // @ts-ignore
    const filteredData = dataWithCustomRows.filter(item => displayType === 'all' || item.type === displayType);

    return (
        <main>
            <div>
                <Button onClick={() => setIsCardComponentVisible(true)}>Show Cards</Button>
                <Button onClick={() => setIsCardComponentVisible(false)}>Show Table</Button>

                <Button onClick={() => setDisplayType('bid')}>Show Bids</Button> {/* Add this line */}
                <Button onClick={() => setDisplayType('ask')}>Show Asks</Button> {/* Add this line */}


                {isCardComponentVisible ? (
                    <CardComponent data={filteredData}></CardComponent>
                ) : (
                    <BuySellTable columns={columnsBidTable} data={filteredData}/>
                )}
            </div>
        </main>
    );
};