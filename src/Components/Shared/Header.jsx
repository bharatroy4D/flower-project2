import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-9/12  mx-auto py-4 flex items-center  relative">

            {/* Shop by Categories Button */}
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 mr-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition text-sm md:text-base">
                    Shop by Categories
                    <MdOutlineKeyboardArrowDown className="text-lg md:text-2xl" />
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700 text-sm md:text-base">
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center ">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? 
                        <HiOutlineXMark className="text-3xl text-gray-700" /> 
                        : 
                        <HiOutlineBars3BottomRight className="text-3xl text-gray-700" />
                    }
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {
                isMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-4 flex flex-col gap-3 items-start px-4 font-semibold text-gray-700 text-sm z-50">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}>
                            Flowers
                        </NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}>
                            All Brands
                        </NavLink>
                        <NavLink to="/today" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}>
                            Today's Deal
                        </NavLink>
                        <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}>
                            Contact
                        </NavLink>
                        <NavLink to="/blogs" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "text-red-600" : "hover:text-red-500 transition"}>
                            More
                        </NavLink>
                    </div>
                )
            }

        </div>
    );
};

export default Header;
