import React from 'react';
import medal from '../assets/img/medal-admin-.svg';
import Profile from '../assets/img/profile.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faArrowRight, faCheckCircle, faUsers, faEdit } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className='flex flex-col gap-10 m-auto max-w-5xl pb-20 pt-32 px-2 w-full z-0'>
            <section className="backdrop-blur bg-gray-900 bg-opacity-20 flex items-center p-2 rounded-xl shadow-xl w-full">
                <FontAwesomeIcon icon={faBell} className="p-5 text-4xl text-gray-200" />
                <div>
                    <h1 className="font-extrabold text-white text-xl">Get the best from us</h1>
                    <p className="font-semibold text-gray-300">Find any coin or tokens you want to monitor</p>
                </div>
                <button className="ml-auto">
                    <FontAwesomeIcon icon={faArrowRight} className="fa-lg p-3 text-gray-300" />
                </button>
            </section>
            <section className="flex flex-col gap-5 w-full md:flex-row">
                <div className="backdrop-blur bg-gray-300 bg-opacity-20 duration-300 flex flex-col h-3/6 items-center min-h-full p-5 relative rounded-xl shadow-lg transition-all w-full md:max-w-xs overflow-hidden">
                <img src={Profile} alt="User" className="border-8 border-gray-400 mb-5 rounded-full shadow-2xl w-28"  />
                    <p className="font-bold text-gray-100 text-lg">
                        Fullname
                        <FontAwesomeIcon icon={faCheckCircle} className="fa-xs px-2" />
                    </p>
                    <p className="font-semibold text-gray-200">Username</p>
                    <img src={medal} alt="medal-admin" className="-right-20 -top-2 absolute blur-sm w-40" />
                </div>

                <div className="backdrop-blur bg-gray-100 bg-opacity-75 duration-300 overflow-auto rounded-xl shadow-lg transition-all w-full">
                    <div className="bg-gradient-to-bl flex from-gray-300 gap-5 items-center justify-between p-3 to-blue-300 via-red-200">
                        <a href="#" className="duration-300 flex hover:bg-gray-100 hover:bg-opacity-40 hover:shadow-lg items-center rounded-xl transition-all w-full">
                            <FontAwesomeIcon icon={faUsers} className="p-3 text-4xl text-gray-900" />
                            <div>
                                <h2 className="font-bold text-xl">Users</h2>
                                <p>Added new user</p>
                            </div>
                        </a>
                        <button className="duration-300 h-12 hover:bg-gray-100 hover:bg-opacity-40 hover:shadow-xl rounded-lg transition-all w-12">
                            <FontAwesomeIcon icon={faEdit} className="fa-lg text-gray-900" />
                        </button>
                    </div>

                    <div className="bg-gray-100 overflow-x-auto">
                        <table className="border-gray-200 min-w-full">
                            <thead className="bg-gray-200 border-b-2 border-gray-800 border-opacity-20 p-2">
                                <tr>
                                    <th className="border-b px-4 py-2 text-left">id</th>
                                    <th className="border-b px-4 py-2 text-left">Fullname</th>
                                    <th className="border-b px-4 py-2 text-left">Username</th>
                                    <th className="border-b px-4 py-2 text-left">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-solid hover:bg-gray-100">
                                    <td className="py-2 px-4">1</td>
                                    <td className="py-2 px-4">Promise Uzor</td>
                                    <td className="py-2 px-4">pu123</td>
                                    <td className="py-2 px-4">pu123@email.com</td>
                                </tr>
                                <tr className="border-b-2 border-solid hover:bg-gray-100">
                                    <td className="py-2 px-4">2</td>
                                    <td className="py-2 px-4">Philip Joe</td>
                                    <td className="py-2 px-4">philj</td>
                                    <td className="py-2 px-4">philj@email.com</td>
                                </tr>
                                <tr className="border-b-2 border-solid hover:bg-gray-100">
                                    <td className="py-2 px-4">3</td>
                                    <td className="py-2 px-4">Alex Brown</td>
                                    <td className="py-2 px-4">alyg</td>
                                    <td className="py-2 px-4">alyg@email.com</td>
                                </tr>
                                <tr className="border-b-2 border-solid hover:bg-gray-100">
                                    <td className="py-2 px-4">4</td>
                                    <td className="py-2 px-4">Chris Doe</td>
                                    <td className="py-2 px-4">chrisd</td>
                                    <td className="py-2 px-4">chrisd@email.com</td>
                                </tr>
                                <tr className="border-b-2 border-solid hover:bg-gray-100">
                                    <td className="py-2 px-4">5</td>
                                    <td className="py-2 px-4">Jane Smith</td>
                                    <td className="py-2 px-4">janes</td>
                                    <td className="py-2 px-4">janes@email.com</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
