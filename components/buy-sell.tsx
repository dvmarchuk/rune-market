"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, {SetStateAction, useEffect, useState} from 'react';
import MarketData from "@/components/bid-table";
async function putData(address: string, type: string, amount: number, price: number): Promise<void> {
    const response = await fetch(`https://runepro-psbt.onrender.com/make-psbt?address=${address}&type=${type}&amount=${amount}&price=${price}`, {
    // const response = await fetch(`https://runepro-psbt.onrender.com/make-psbt?address=tb1p8yfc7znlkfdmlt2d77h9x7fp3f0p6vdec4r644kcd0jeafgkz7aq2zaxvg&type=bid&amount=1&price=123`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}
export default function BuySell() {
    const [selectedButton, setSelectedButton] = useState('buy');
    const [price, setPrice] = useState(0); // Add this line
    const [amount, setAmount] = useState(0); // Add this line
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        // Load the wallet address from localStorage when the component mounts
        const savedWalletAddress = localStorage.getItem('walletAddress');
        if (savedWalletAddress) {
            setWalletAddress(savedWalletAddress);
        }
    }, []);

    const handleClick = (button: SetStateAction<string>) => {
        setSelectedButton(button);
    }
    return (<main className="h-screen bg-slate-950">{/*style={styles.backgroundImage}*/}
        <div className="font-mono">
            <div>
                {/*container mx-auto py-10*/}

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
                    <Input type="number" placeholder="Price"
                           onChange={e => setPrice(Number(e.target.value))}
                    ></Input> {/* Update this line */}

                    {/*amount*/}
                    <Input type="number" placeholder="Amount"
                           onChange={e => setAmount(Number(e.target.value))}
                    ></Input>

                    {/*total*/}
                    <Input type="number" value={`${price * amount}`} readOnly></Input>
                </div>


            </div>

            <Button
                onClick={() => putData(walletAddress, selectedButton, amount, price)}>
                Submit Order
            </Button>

            {/*<div>*/}
            {/*    {walletAddress ? (*/}
            {/*        <p>Wallet Address: {walletAddress}</p>*/}
            {/*    ) : (*/}
            {/*        <p>No wallet connected.</p>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/*<Button className="bg-green-950">Buy</Button>*/}
            {/*<Button className="bg-red-950">Sell</Button>*/}
            {/*call the api*/}
            {/*<DataTable columns={columns} data={data}/>*/}
        </div>
    </main>);
}
