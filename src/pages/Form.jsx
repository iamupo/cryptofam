import React, { useState } from 'react';
import '../index.css';
import coin from '../assets/logo/Coin1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

function Form() {
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!termsAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }

        const formData = {
            fullName: event.target.fullName.value,
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            userId: uuidv4() // Generate a UUID for the user
        };

        // Simulate storing data (logging to console for now)
        console.log("Form Data:", formData);

        // Optionally, you can clear the form fields after submission
        event.target.reset();
        setTermsAccepted(false); // Reset terms accepted state
    };

    const handleCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center overflow-auto relative z-0 w-screen pt-5">
            <div className="absolute inset-0 flex items-center justify-center">
                <img src={coin} alt="coin1" className="opacity-50 w-80" />
            </div>
            <div className="relative z-10">
                <div className="backdrop-blur-md bg-opacity-30 bg-pink-700 m-5 p-5 rounded-lg shadow-inner">
                    <h1 className="capitalize font-bold leading-10 mb-10 mx-5 text-3xl text-center text-white">
                        Be among the <b className="text-yellow-300 uppercase">crypto Fam</b>
                    </h1>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <input
                            className="bg-transparent transition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80"
                            type="text"
                            placeholder="Enter Fullname"
                            id="fullName"
                            name="fullName"
                            required
                        />
                        <input
                            className="bg-transparent transition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80"
                            type="text"
                            placeholder="Enter Username"
                            id="username"
                            name="username"
                            required
                        />
                        <input
                            className="bg-transparent transition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80"
                            type="email"
                            placeholder="Enter Email"
                            id="email"
                            name="email"
                            required
                        />
                        <input
                            className="bg-transparent transition-all duration-300 ease-linear border-2 border-opacity-50 border-solid border-white focus:bg-white focus:border-blue-300 focus:outline-none focus:text-gray-800 font-semibold p-3 placeholder-opacity-50 placeholder-white rounded-full text-gray-50 text-lg text-opacity-80"
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            name="password"
                            required
                        />
                        <div className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                required
                                checked={termsAccepted}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="terms" className="text-gray-200">
                                Accept Terms and Conditions
                            </label>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-between my-5">
                            <a
                                href="#"
                                className="bg-blue-600 duration-300 ease-in-out hover:shadow-none inline-flex items-center justify-center p-2 rounded-full shadow-lg text-white transition-all w-full md:items-center"
                            >
                                <FontAwesomeIcon icon={faGoogle} className="text-2xl" />
                                <span className="capitalize font-medium ml-4 text-base text-center">Continue with Google</span>
                            </a>
                            <a
                                href="#"
                                className="bg-gray-100 duration-300 ease-in-out hover:shadow-none inline-flex items-center justify-center p-2 rounded-full shadow-lg text-black transition-all w-full"
                            >
                                <FontAwesomeIcon icon={faApple} className="text-2xl" />
                                <span className="capitalize font-medium ml-4 text-base text-center">Continue with Apple</span>
                            </a>
                        </div>
                        <button type="submit" className="bg-yellow-200 transition-all duration-300 ease-linear font-bold hover:bg-yellow-300 mt-4 px-4 py-3 rounded-full text-gray-800">
                            Join Now
                        </button>
                    </form>
                </div>
            </div>
            <p className="relative z-10 font-medium text-white">
                Already have an account{' '}
                <a href="#" target="_blank" className="font-bold text-blue-600">login here</a>
            </p>
        </div>
    );
}

export default Form;
