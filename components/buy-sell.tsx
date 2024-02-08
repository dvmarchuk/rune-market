"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { SetStateAction, useState} from 'react';
import MarketData from "@/components/bid-table";

export default function BuySell() {
    const [selectedButton, setSelectedButton] = useState('buy');

    const handleClick = (button: SetStateAction<string>) => {
        setSelectedButton(button);
    }
    return (
        <main className="h-screen bg-slate-950" >{/*style={styles.backgroundImage}*/}
            <div className="font-mono">
                <div className="flex flex-row ">
                    {/*container mx-auto py-10*/}
                    <div className="basis-1/4">
                    {/*    make the buy sell bid thing here*/}
                    {/*    make a reusable row*/}
                    {/*    ngfor that crap for all the listing*/}
                    {/*    pagination or scroll will be required.*/}

                    {/*    buy part thats green*/}
                    {/*    sell part thats red*/}
                    {/*    previous sales*/}
                        <MarketData/>
                    </div>
                    <div className="basis-1/2">01</div>
                    <div className="basis-1/4 ">

                        <div className="flex justify-between mb-1">
                            <Button
                                className={`bg-slate-950 outline outline-gray-400 w-1/2 rounded-r-none hover:bg-green-800 ${selectedButton === 'buy' ? 'bg-green-800 ' : ''}`}
                                onClick={() => handleClick('buy')}
                            >
                                Buy
                            </Button>
                            <Button
                                className={`bg-slate-950 outline outline-gray-400 w-1/2 rounded-l-none hover:bg-red-800 ${selectedButton === 'sell' ? 'bg-red-800' : ''}`}
                                onClick={() => handleClick('sell')}
                            >
                                Sell
                            </Button>
                        </div>

                        {/*3 input field accepting numbers*/}
                        {/*price*/}
                        <div>
                            {/*also do*/}
                            {/*limit vs market*/}
                            {/*amount*/}
                            <Input type="number" placeholder="Price"></Input>

                            {/*amount*/}
                            <Input type="number" placeholder="Amount"></Input>

                            {/*total*/}
                            <Input type="number" placeholder="Total"></Input>
                        </div>


                    </div>

                    {/*<Button className="bg-green-950">Buy</Button>*/}
                    {/*<Button className="bg-red-950">Sell</Button>*/}
                    {/*call the api*/}
                    {/*<DataTable columns={columns} data={data}/>*/}
                </div>
            </div>
        </main>
    );
}
