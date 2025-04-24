import React from 'react';
import { LiaFlagUsaSolid } from 'react-icons/lia';

const Top = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-10 bg-base-100 text-sm border-b border-gray-400/30">
                <div className="flex-1">
                    <a href="#" className="text-gray-600">
                        Limited-Time Offers : Mid-Summer Season Sale On Selected Items - 
                        <span className='text-red-500 font-semibold underline ml-1'>SHOP NOW</span>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="relative pr-2">
                            <a className="text-gray-600">Help Center</a>
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3"></span>
                        </li>
                        <li className="relative pr-2">
                            <a className="text-gray-600">Order Tracking</a>
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3 "></span>
                        </li>
                        <li>
                            <details>
                                <summary className='flex items-center gap-1 text-gray-600'>
                                    <LiaFlagUsaSolid className='text-xl' />EN
                                </summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a><LiaFlagUsaSolid />English</a></li>
                                    <li><a><LiaFlagUsaSolid />France</a></li>
                                    <li><a><LiaFlagUsaSolid />India</a></li>
                                    <li><a><LiaFlagUsaSolid />Bangladesh</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-gray-600">USD</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>EUR</a></li>
                                    <li><a>USD</a></li>
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
