import React from 'react';
import { BsFlower1 } from 'react-icons/bs';
import { HiArrowPath, HiMiniArrowPath } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import daisy from '../../assets/daisy.png'


const MiddleTop = () => {
    return (
        <div >
            <div className="flex justify-between items-center py-6 px-10 bg-base-200 ">
                <div className="text-3xl">
                    <a className="flex gap-2 items-center font-bold font-serif  text-4xl text-pink-800"><img src={daisy} alt="" className='w-11' />
                        Flowers</a>
                </div>
                <div className="flex w-full max-w-md rounded-md overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search products here..."
                        className="flex-grow px-4 py-2 outline-none text-sm text-gray-700"
                    />
                    <button className="bg-red-500 p-3 text-white hover:bg-red-600 transition-all duration-200">
                        <FiSearch className="text-lg" />
                    </button>
                </div>
                <div className="flex gap-2">
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