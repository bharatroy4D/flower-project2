import React from 'react';
import { BsFlower1 } from 'react-icons/bs';
import { HiArrowPath, HiMiniArrowPath } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { GiFlowerTwirl } from 'react-icons/gi';


const MiddleTop = () => {
    return (
        <div >
<<<<<<< HEAD
            <div className="flex justify-between items-center gap-4 py-6  mx-auto lg:max-w-7xl px-5 lg:px-10 border-b border-gray-400/30 ">
=======
            <div className="flex justify-between items-center gap-4 py-6 w-9/12 mx-auto  border-b border-gray-400/30 ">
>>>>>>> dfe08274c457a72b154845a6ebf52a050ed38bbb
                <div className="text-3xl hidden lg:block">
                    <a className="flex gap-2 items-center justify-center font-bold font-sans  text-4xl text-pink-800"><GiFlowerTwirl className='text-3xl text-red-500'/>

                        Flowers</a>
                </div>
                <div className="flex w-full lg:max-w-md rounded-md overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search products here..."
                        className="flex-grow px-4 py-2 outline-none text-sm text-gray-700"
                    />
                    <button className="bg-red-500 p-3 text-white hover:bg-red-600 transition-all duration-200">
                        <FiSearch className="text-lg" />
                    </button>
                </div>
                <div className=" gap-2 hidden md:inline-flex">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <HiArrowPath className='text-2xl' />

                                <span className="badge badge-sm indicator-item bg-pink-800 text-white rounded-full">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <IoMdHeartEmpty className='text-2xl' />
                                <span className="badge badge-sm indicator-item bg-pink-800 text-white rounded-full">5</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FiShoppingCart className='text-2xl ' />
                                <span className="badge badge-sm indicator-item bg-pink-800 text-white rounded-full">8</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MiddleTop;