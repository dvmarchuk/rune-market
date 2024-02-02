"use client"

import twitter2 from '../app/assets/twitter.svg';
import Image from "next/image";

export function Header() {
    return (
        <header className='bg-slate-950'>
            <div className="flex justify-between p-5 col-auto font-mono">
                <div className="flex col-auto items-start">
                    {/*<Image src={twitter} alt="logo and name"></Image>*/}
                    {/*&nbsp;*/}
                    <h1 style={{color: "white"}}>RunePro</h1>
                </div>
                <div className="flex col-auto items-end">
                    <a className="mr-2" href="https://twitter.com/Rune_Pro" target="_blank" rel="noreferrer">
                        <Image src={twitter2} alt="Twitter" />
                    </a>
                    {/*<button onClick={() => window.location.href='https://www.google.com'}>Docs</button>*/}
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