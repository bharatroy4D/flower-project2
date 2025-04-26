import React from 'react';
import shop_2 from '../../../../assets/shop3.jpg';
import rose from '../../../../assets/rose.png';
import zinnia from '../../../../assets/zinnia.png';
import crocus from '../../../../assets/crocus.png';
import a from '../../../../assets/a.png';
import b from '../../../../assets/b.png';
import c from '../../../../assets/c.png';
import d from '../../../../assets/d.png';
import e from '../../../../assets/crocus.png';

const flowers = [
    { id: 1, img: rose, label: "Rose" },
    { id: 2, img: zinnia, label: "Zinnia" },
    { id: 3, img: crocus, label: "Crocus" },
];
const products = [
    { id: 1, img: a },
    { id: 2, img: e },
    { id: 3, img: c },
    { id: 4, img: d },
    { id: 5, img: b },
]

const Hero = () => {
    return (
        <div className="w-9/12 mx-auto py-6">
            <div className="flex flex-col lg:flex-row gap-6  items-start">

                {/* Banner Section */}
                <div className="relative w-full lg:w-[72%]">
                    <img
                        src={shop_2}
                        alt="Banner"
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded object-cover opacity-90"
                    />
                    <div className="absolute top-28 right-8 text-white max-w-md">
                        <button className="bg-red-600 px-3 py-1 rounded-full text-sm">WELCOME TO SHOP</button>
                        <h1 className="text-2xl md:text-4xl font-bold mt-4 leading-snug">
                            Follower <br /> All Items show <br /> for you
                        </h1>
                        <p className="mt-2 text-sm">This week only for follower premiums</p>
                        <button className="mt-4 bg-red-600 px-5 py-2 rounded text-white text-base font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Flower Cards */}
                <div className="flex flex-col gap-7 justify-between w-full ">
                    {flowers.map(({ id, img, label }) => (
                        <div key={id} className="flex items-center justify-between bg-gray-200 shadow p-7 rounded w-full">
                            <img src={img} alt={label} className="w-20 md:w-24" />
                            <div>
                                <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-full">save 10% off</button>
                                <h3 className="text-lg font-semibold mt-2">{label} Flower</h3>
                                <p className="text-sm underline mt-1 font-medium">Shop Now</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/* products */}
            <div className='flex justify-between gap-5 my-10 '>
                {
                    products.map(({id, img}) =>(
                        <div key={id} className='border border-gray-400/25 rounded px-10 py-3 bg-base-200 shadow-md'>
                            <img src={img} alt=""  className=' min-h-14'/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hero;
