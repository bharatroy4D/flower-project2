import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-4 items-center px-10 font-semibold'>
            <button className='btn bg-red-600 text-white font-semibold'>Shop by Categories </button>
            <NavLink to='/'>Flowers</NavLink>
            <NavLink to='/about'>All Brands</NavLink>
            <NavLink to='/products'>Contact</NavLink>
            <NavLink to='/blogs'>More</NavLink>
        </div>
    );
};

export default Header;