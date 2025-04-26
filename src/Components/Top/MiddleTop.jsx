import React from 'react';
import { HiArrowPath } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import daisy from '../../assets/daisy.png';

const MiddleTop = () => {
    return (
        <div className="bg-white shadow-sm py-6">
            <div className="w-10/12 max-w-7xl mx-auto flex flex-col gap-4">

                {/* Top Part (Logo + Search + Icons) */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full">

                    {/* Logo */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <img src={daisy} alt="Logo" className="w-10 md:w-12" />
                        <span className="text-2xl md:text-4xl font-bold font-serif text-pink-800">Flowers</span>
                    </div>

                    {/* Search Bar (hidden on mobile) */}
                    <div className="hidden lg:flex flex-grow max-w-2xl border border-gray-300 rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search products here..."
                            className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none"
                        />
                        <button className="bg-red-500 p-3 hover:bg-red-600 transition-all duration-300 text-white">
                            <FiSearch className="text-lg" />
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-5 flex-shrink-0">
                        <div className="relative cursor-pointer">
                            <HiArrowPath className="text-2xl text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-[10px] rounded-full px-1">2</span>
                        </div>
                        <div className="relative cursor-pointer">
                            <IoMdHeartEmpty className="text-2xl text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-[10px] rounded-full px-1">5</span>
                        </div>
                        <div className="relative cursor-pointer">
                            <FiShoppingCart className="text-2xl text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-[10px] rounded-full px-1">8</span>
                        </div>
                    </div>

                </div>

                {/* Mobile Search Bar (only visible on mobile) */}
                <div className="flex lg:hidden w-full border border-gray-300 rounded-md overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search products here..."
                        className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none"
                    />
                    <button className="bg-red-500 p-3 hover:bg-red-600 transition-all duration-300 text-white">
                        <FiSearch className="text-lg" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MiddleTop;
