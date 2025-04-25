import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-8 items-center w-9/12 mx-auto py-3 font-semibold'>
            <button className='btn bg-red-600 text-white font-semibold py-2 mr-10'>Shop by Categories <MdOutlineKeyboardArrowDown />
            </button>
            <NavLink to='/'>Flowers</NavLink>
            <NavLink to='/about'>All Brands</NavLink>
            <NavLink to='/today'>Today's deal</NavLink>
            <NavLink to='/products'>Contact</NavLink>
            <NavLink to='/blogs'>More</NavLink>
        </div>
    );
};

export default Header;