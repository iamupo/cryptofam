import React from 'react'
import coin from '../assets/logo/Coin1.png';

function Footer() {
    return (
        <footer className="backdrop-blur bg-gray-200 bg-opacity-25 bottom-0 fixed flex justify-center p-2 shadow-lg w-full" data-pg-collapsed>
            <a href="" className="flex font-bold items-center text-gray-900"><img src={coin} alt="coin1" className="mr-2 w-8" />Crypto<span className="text-yellow-400">Fam</span></a>
        </footer>
    )
}

export default Footer