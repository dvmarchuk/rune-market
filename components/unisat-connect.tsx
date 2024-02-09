import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

declare global {
    interface Window {
        unisat:  {
            requestAccounts: () => Promise<string[]>;
        };
    }
}

const UniSatWalletConnectButton = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [isUniSatWalletInstalled, setIsUniSatWalletInstalled] = useState(false);

    useEffect(() => {
        // Check if UniSat Wallet is installed on page load
        setIsUniSatWalletInstalled(typeof window.unisat !== 'undefined');

        // Try to load the wallet address from localStorage
        const savedWalletAddress = localStorage.getItem('walletAddress');
        if (savedWalletAddress) {
            setWalletAddress(savedWalletAddress);
        }
    }, []);

    const connectWalletHandler = async () => {
        if (window.unisat) {
            try {
                const accounts = await window.unisat.requestAccounts();
                if (accounts.length > 0) {
                    const address = accounts[0];
                    setWalletAddress(address);
                    // Save the wallet address to localStorage
                    localStorage.setItem('walletAddress', address);
                }
            } catch (error) {
                console.error('Connection to UniSat Wallet failed:', error);
            }
        } else {
            console.log('UniSat Wallet is not installed!');
        }
    };

    return (
        <div>
            {isUniSatWalletInstalled ? (
                <Button onClick={connectWalletHandler}>{walletAddress ? 'Connected' : 'Connect'}</Button>
            ) : (
                <p>Please install UniSat Wallet to connect.</p>
            )}
            {/*{walletAddress && <p>Connected with: {walletAddress}</p>}*/}
        </div>
    );
};

export default UniSatWalletConnectButton;
