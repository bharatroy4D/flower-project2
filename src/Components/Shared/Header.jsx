import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-10/12 max-w-7xl mx-auto py-4 flex flex-wrap items-center  gap-5'>

            {/* Shop by Categories Button */}
            <button className='flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 mr-6 rounded-md transition text-sm md:text-base'>
                Shop by Categories
                <MdOutlineKeyboardArrowDown className="text-lg md:text-2xl" />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 font-semibold text-gray-700 text-sm md:text-base">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}
                >
                    Flowers
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}
                >
                    All Brands
                </NavLink>
                <NavLink
                    to="/today"
                    className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}
                >
                    Today's Deal
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}
                >
                    More
                </NavLink>
            </div>

        </div>
    );
};

export default Header;
