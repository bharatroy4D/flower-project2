import React from 'react';
import { LiaFlagUsaSolid } from 'react-icons/lia';

const Top = () => {
    return (
        <div className="bg-base-100 text-sm ">
            <div className="w-9/12  mx-auto flex flex-col md:flex-row justify-between items-center gap-2 py-2">

                {/* Offer Text */}
                <div className="hidden lg:block text-center md:text-left w-full md:w-auto">
                    <a href="#" className="text-gray-600">
                        Limited-Time Offers: Mid-Summer Season Sale On Selected Items - 
                        <span className='text-red-500 font-semibold underline ml-1'>SHOP NOW</span>
                    </a>
                </div>

                {/* Right Menus */}
                <div className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-gray-600">
                        <li>
                            <a className="hover:text-red-500 transition-all duration-300">Help Center</a>
                        </li>
                        <li>
                            <a className="hover:text-red-500 transition-all duration-300">Order Tracking</a>
                        </li>
                        <li>
                            <details className="relative cursor-pointer">
                                <summary className="flex items-center gap-1 hover:text-red-500 transition-all duration-300">
                                    <LiaFlagUsaSolid className="text-xl" /> EN
                                </summary>
                                <ul className="absolute right-0 mt-2 w-32 p-2 bg-base-100 rounded shadow-md z-10">
                                    <li><a className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded"><LiaFlagUsaSolid /> English</a></li>
                                    <li><a className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded"><LiaFlagUsaSolid /> France</a></li>
                                    <li><a className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded"><LiaFlagUsaSolid /> India</a></li>
                                    <li><a className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded"><LiaFlagUsaSolid /> Bangladesh</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="relative cursor-pointer">
                                <summary className="hover:text-red-500 transition-all duration-300">USD</summary>
                                <ul className="absolute right-0 mt-2 w-24 p-2 bg-base-100 rounded shadow-md z-10">
                                    <li><a className="hover:bg-gray-100 p-1 rounded">EUR</a></li>
                                    <li><a className="hover:bg-gray-100 p-1 rounded">USD</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Top;
