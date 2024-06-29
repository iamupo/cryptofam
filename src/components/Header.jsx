import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartLine, faWallet, faHardHat, faShieldAlt, faTh, faUserAlt, faChartPie, faBriefcase, faUserCog, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import coin from '../assets/logo/Coin1.png';
import profile from '../assets/img/profile.jpeg';

function Header() {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const navMenuRef = useRef(null);
    const userDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setIsNavMenuOpen(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
        if (!isNavMenuOpen && isUserDropdownOpen) {
            setIsUserDropdownOpen(false);
        }
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
        if (!isUserDropdownOpen && isNavMenuOpen) {
            setIsNavMenuOpen(false);
        }
    };

    return (
        <header className="backdrop-blur bg-opacity-0 bg-pink-700 fixed flex items-center justify-between p-2 shadow-xl top-0 w-screen z-10">
            <a href="/" className="flex font-bold items-center text-white">
                <img src={coin} alt="coin1" className="mr-2 w-8" />
                Crypto<span className="text-yellow-400">Fam</span>
            </a>
            <nav id="navMenu" ref={navMenuRef} className={`absolute backdrop-blur-md bg-gray-200 flex flex-row flex-wrap gap-3 items-center justify-start list-none p-3 right-16 rounded-xl shadow-xl top-16 w-60 sm:bg-transparent sm:flex sm:flex-row sm:gap-2 sm:py-2 sm:shadow-none sm:static sm:w-auto ${isNavMenuOpen ? 'block' : 'hidden'}`}>
                <li className="duration-200 transition-all">
                    <a href="/" className="bg-gray-300 duration-300 flex flex-col font-semibold gap-1 h-16 hover:shadow-lg items-center justify-center justify-items-center rounded-md text-sm transition-all w-16 sm:bg-transparent sm:h-auto sm:hover:shadow-none sm:hover:text-gray-200 sm:rounded-none sm:text-white">
                        <FontAwesomeIcon icon={faSearch} className="block fa-fw fa-lg fas sm:hidden" />
                        Discover
                    </a>
                </li>
                <li className="duration-200 transition-all">
                    <a href="/" className="bg-gray-300 duration-300 flex flex-col font-semibold gap-1 h-16 hover:shadow-lg items-center justify-center justify-items-center rounded-md text-sm transition-all w-16 sm:bg-transparent sm:h-auto sm:hover:shadow-none sm:hover:text-gray-200 sm:rounded-none sm:text-white">
                        <FontAwesomeIcon icon={faChartLine} className="block fa-chart-line fa-fw fa-lg fas sm:hidden" />
                        Trade
                    </a>
                </li>
                <li className="duration-200 transition-all">
                    <a href="/" className="bg-gray-300 duration-300 flex flex-col font-semibold gap-1 h-16 hover:shadow-lg items-center justify-center justify-items-center rounded-md text-sm transition-all w-16 sm:bg-transparent sm:h-auto sm:hover:shadow-none sm:hover:text-gray-200 sm:rounded-none sm:text-white">
                        <FontAwesomeIcon icon={faWallet} className="block fa-fw fa-lg fa-wallet fas sm:hidden" />
                        Wallet
                    </a>
                </li>
                <li className="duration-200 transition-all">
                    <a href="/" className="bg-gray-300 duration-300 flex flex-col font-semibold gap-1 h-16 hover:shadow-lg items-center justify-center justify-items-center rounded-md text-sm transition-all w-16 sm:bg-transparent sm:h-auto sm:hover:shadow-none sm:hover:text-gray-200 sm:rounded-none sm:text-white">
                        <FontAwesomeIcon icon={faHardHat} className="block fa-fw fa-lg fa-hard-hat fas sm:hidden" />
                        Build
                    </a>
                </li>
                <li className="duration-200 transition-all">
                    <a href="/" className="bg-gray-300 duration-300 flex flex-col font-semibold gap-1 h-16 hover:shadow-lg items-center justify-center justify-items-center rounded-md text-sm transition-all w-16 sm:bg-transparent sm:h-auto sm:hover:shadow-none sm:hover:text-gray-200 sm:rounded-none sm:text-white">
                        <FontAwesomeIcon icon={faShieldAlt} className="block fa-fw fa-lg fa-shield-alt fas sm:hidden" />
                        Privacy
                    </a>
                </li>
            </nav>
            <div className="gap-5 inline-flex relative">
                <button id="navToggleButton" className="block sm:hidden" onClick={toggleNavMenu}>
                    <FontAwesomeIcon icon={faTh} className="fa-th fas text-2xl text-white" />
                </button>
                <img src={profile} alt="user-avatar" className="border-4 border-gray-300 rounded-full shadow-2xl w-10 cursor-pointer" id="userDropdownToggle" onClick={toggleUserDropdown} />
                <div id="userDropdown" ref={userDropdownRef} className={`absolute backdrop-blur-2xl bg-gray-50 bg-opacity-95 ${isUserDropdownOpen ? 'block' : 'hidden'} p-2 right-0 rounded-lg shadow-xl top-16 w-64`}>
                    <div className="border-b border-gray-400 border-solid flex gap-3 items-center p-2">
                        <FontAwesomeIcon icon={faUserAlt} className="fa-2x fa-fw fa-user-alt fas text-gray-900" />
                        <div>
                            <p>Username</p>
                            <span className="flex">UID: <b>7FBF44</b></span>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1 items-start list-none my-4 w-auto">
                        <li className="w-full">
                            <a href="/" className="duration-200 flex font-semibold gap-2 hover:bg-gray-200 items-center justify-start p-3 rounded-lg text-gray-900 transition-all">
                                <FontAwesomeIcon icon={faChartPie} className="fa-chart-pie fa-fw fas" />
                                Overview
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="/" className="duration-200 flex font-semibold gap-2 hover:bg-gray-200 items-center justify-start p-3 rounded-lg text-gray-900 transition-all">
                                <FontAwesomeIcon icon={faBriefcase} className="fa-briefcase fa-fw fas" />
                                Assets
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="/" className="duration-200 flex font-semibold gap-2 hover:bg-gray-200 items-center justify-start p-3 rounded-lg text-gray-900 transition-all">
                                <FontAwesomeIcon icon={faUserCog} className="fa-fw fa-user-cog fas" />
                                Settings
                            </a>
                        </li>
                    </nav>
                    <div className="border-gray-400 border-solid border-t">
                        <button className="cursor-pointer duration-200 flex font-semibold gap-2 hover:bg-gray-200 items-center justify-start mt-3 p-3 rounded-lg text-gray-900 transition-all w-full">
                            <FontAwesomeIcon icon={faSignInAlt} className="fa-fw fa-sign-in-alt fas" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
