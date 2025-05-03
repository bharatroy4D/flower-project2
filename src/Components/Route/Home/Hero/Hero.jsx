import React from 'react';
import { motion } from 'framer-motion';
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
    { id: 1, name:'Rose', img: a },
    { id: 2, name:'Orchid', img: e },
    { id: 3, name:'Sunflower', img: c },
    { id: 4, name:'Daisy', img: d },
    { id: 5, name:'Tulip', img: b },
];

const Hero = () => {
    return (
        <div className=" max-w-7xl px-5 lg:px-10 mx-auto py-10">

            {/* Top Banner + Flower Cards */}
            <div className="flex flex-col lg:flex-row gap-10 items-stretch">

                {/* Banner Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full lg:w-2/3 rounded overflow-hidden"
                >
                    <img
                        src={shop_2}
                        alt="Banner"
                        className="w-full h-[250px] md:h-[400px] lg:h-[415px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 text-white bg-black/20">
                        <button className="bg-red-600 px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wide w-max">
                            Welcome to Shop
                        </button>
                        <h1 className="text-2xl md:text-4xl font-bold mt-4 leading-snug">
                            Flower <br /> All Items Show <br /> For You
                        </h1>
                        <p className="mt-3 text-sm md:text-base max-w-sm">
                            This week only for Flower Premiums. Grab your favorite flowers now!
                        </p>
                        <button className="mt-5 bg-red-600 hover:bg-red-700 w-fit px-6 py-2 rounded-full text-white font-semibold text-sm md:text-base transition">
                            Shop Now
                        </button>
                    </div>
                </motion.div>

                {/* Flower Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 w-full lg:w-1/3 h-full justify-between"
                >
                    {flowers.map(({ id, img, label }) => (
                        <motion.div
                            key={id}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center justify-between bg-gray-200 hover:bg-gray-200 transition rounded p-5 shadow h-[30%]"
                        >
                            <img src={img} alt={label} className="w-16 md:w-20 object-contain" />
                            <div className="text-right">
                                <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-full mb-2">
                                    Save 10% Off
                                </button>
                                <h3 className="text-lg font-semibold">{label} Flower</h3>
                                <p className="text-sm text-pink-600 underline cursor-pointer">Shop Now</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* Products Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center md:justify-between gap-5 mt-12"
            >
                    {products.map(({ id, img,}) => (
                        <div key={id} className=" border border-gray-300 bg-base-200 rounded p-5 flex flex-col items-center justify-center shadow hover:shadow-lg transition w-28 md:w-32 lg:w-52 lg:h-auto">
                            <img src={img} alt="Product" className="h-20 object-contain" />
                        </div>
                    ))}
            </motion.div>
        </div>
    );
};

export default Hero;
