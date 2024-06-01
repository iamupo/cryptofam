import React from 'react'
import '../index.css'
import coin from '../assets/Coin1.png'

function Form() {
  return (
    <div className="bg-gray-900 flex flex-col h-screen items-center justify-center relative w-screen" data-pg-collapsed>
    <div className="inline-block z-0 2xl:gap-10">
        <img src={coin} alt="coin1" className="w-40"/>
    </div>
    <div className="backdrop-blur-md bg-opacity-30 bg-pink-700 m-5 p-5 rounded-lg"> 
        <h1 className="capitalize font-bold leading-10 mb-10 mx-5 text-3xl text-center text-white">Be among the <b className="text-yellow-300 uppercase">crypto Fam</b></h1> 
        <form className="flex flex-col gap-5"> 
            <input className="bg-transparent ransition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80" type="text" placeholder="Enter Fullname" required="true"/>
            <input className="bg-transparent ransition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80" type="text" placeholder="Enter Username" required="true"/>
            <input className="bg-transparent ransition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80" type="password" placeholder="Enter Password" required="true"/>
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="terms"/><span className="text-gray-200"><a href="#link" target="_blank">Accept Terms and Conditions</a></span>
            </div>             
            <button className="bg-yellow-200 duration-300 ease-linear font-bold hover:bg-yellow-300 mt-4 px-4 py-3 rounded-full text-gray-800 transition-all">Join Now</button>             
        </form>         
    </div>
</div>
  )
}

export default Form