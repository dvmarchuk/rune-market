"use client"

import twitter2 from '../app/assets/twitter.svg';
import Image from "next/image";

export function Header() {
    return (
        <header className='bg-slate-950'>
            <div className="flex justify-between p-5 col-auto font-mono">
                <div className="flex col-auto items-center">
                    <Image src='/whiteLogo.png' width={25} height={25} alt="Logo" />
                    <h1 style={{color: "white"}}>RunePro</h1>
                </div>
                <div className="flex col-auto items-center">
                    <a className="mr-2" href="https://twitter.com/Rune_Pro" target="_blank" rel="noreferrer">
                        <Image src={twitter2} alt="Twitter" />
                    </a>
                    <button onClick={() => window.location.href = 'https://www.google.com'}>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"*/}
                        {/*     stroke="currentColor" className="w-6 h-6">*/}
                        {/*    <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>*/}
                        {/*</svg>*/}
                    </button>
                </div>
            </div>
        </header>
    )
}

// <div className="flex flex-row-reverse">
//     <a href="https://twitter.com/BitHopsFinance" target="_blank" rel="noreferrer">
//         <Image src={twitter} alt="twitter"/>
//     </a>
//     <a href="https://discord.gg/8Z6cZfj6" target="_blank" rel="noreferrer">
//         <Image src={twitter} alt="discord"/>
//     </a>
// </div>