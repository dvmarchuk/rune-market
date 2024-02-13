import React, { useState, useEffect } from 'react';

const SatsPrice = () => {
    const [satsPrice, setSatsPrice] = useState(null);

    // Function to fetch Bitcoin price in USD and convert it to sats
    const fetchSatsPrice = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            const data = await response.json();
            // Convert 1 BTC price in USD to sats and update state
            const btcPriceInUsd = data.bitcoin.usd;
            const priceInSats = (1 / btcPriceInUsd) * 100000000;
            setSatsPrice(priceInSats.toFixed(2));
        } catch (error) {
            console.error('Failed to fetch Bitcoin price:', error);
        }
    };

    useEffect(() => {
        fetchSatsPrice(); // Fetch price on component mount
        const interval = setInterval(fetchSatsPrice, 60000); // Update price every 60 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div>
            <p>{satsPrice ? `${satsPrice} sats` : 'Loading...'}</p>
        </div>
    );
};

export default SatsPrice;
