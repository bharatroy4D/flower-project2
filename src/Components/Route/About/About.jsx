import React, { useEffect, useState } from 'react';
import cover from '../../../assets/cover.jpg'
import { FaThLarge, FaList } from "react-icons/fa";
import Product from '../Products/Product';

const categories = [
    { id: 1, name: 'Common' },
    { id: 2, name: 'Rare' },
    { id: 3, name: 'Fragrant' },
    { id: 4, name: 'Seasonal' },
    { id: 5, name: 'Wild' },
    { id: 6, name: 'Exotic' },
];
const About = () => {
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("Relevance");
    const totalProducts = 18;

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto py-5'>
            <div className='flex gap-15'>
                {/* left container */}
                <div className='w-1/4'>
                    {/*flower of  category */}
                    <div className='flex flex-col gap-3 border rounded p-5 border-gray-300 '>
                        <h1 className='text-xl font-bold border-b border-gray-400/50 pb-1'>Home</h1>
                        {
                            categories.map(category => (
                                <div className='hover:underline mouse-pointer '>
                                    {category.name}
                                </div>
                            ))
                        }
                    </div>
                    {/*filter feature*/}
                    <div className='p-4 border rounded border-gray-400/40 my-7 '>
                        <h1 className='font-bold border-b border-gray-400/50 pb-1'>Filter By</h1>
                        <h2 className='py-2'>Availability :</h2>

                        {/* checkbox-1 */}
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                className=""
                            />
                            <div className='flex justify-between w-full'>
                                <span className="">in stock</span>
                                <span className="">(15)</span>
                            </div>
                        </div>

                        {/* checkbox-2 */}
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                className=""
                            />
                            <div className='flex justify-between w-full'>
                                <span className="">No Available</span>
                                <span className="">(1)</span>
                            </div>
                        </div>
                        {/* size filter */}
                        <div className='pt-3'>
                            <h2 className='py-2'>Size :</h2>

                            {/* checkbox-1 */}
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className=""
                                />
                                <div className='flex justify-between w-full'>
                                    <span className="">small</span>
                                    <span className="">(15)</span>
                                </div>
                            </div>

                            {/* checkbox-2 */}
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className=""
                                />
                                <div className='flex justify-between w-full'>
                                    <span className="">Medium</span>
                                    <span className="">(1)</span>
                                </div>
                            </div>
                            {/* checkbox-3 */}
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className=""
                                />
                                <div className='flex justify-between w-full'>
                                    <span className="">Large</span>
                                    <span className="">(6)</span>
                                </div>
                            </div>
                            {/* checkbox-4 */}
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className=""
                                />
                                <div className='flex justify-between w-full'>
                                    <span className="">Extra large</span>
                                    <span className="">(9)</span>
                                </div>
                            </div>
                        </div>
                        {/* size color */}
                        <div className='pt-3'>
                            <h2 className='py-2'>Color :</h2>

                            {/* checkbox-1 */}
                            <div className="flex items-center gap-4">
                               <div className='w-5 h-4 rounded-full bg-blue-600'>                                
                               </div>
                                <div className='flex justify-between w-full'>
                                    <span className="">Blue</span>
                                    <span className="">(15)</span>
                                </div>
                            </div>

                            {/* checkbox-2 */}
                            <div className="flex items-center gap-4">
                            <div className='w-5 h-4 rounded-full bg-red-600'>                                
                            </div>
                                <div className='flex justify-between w-full'>
                                    <span className="">Red</span>
                                    <span className="">(1)</span>
                                </div>
                            </div>
                            {/* checkbox-3 */}
                            <div className="flex items-center gap-4">
                            <div className='w-5 h-4 rounded-full bg-yellow-600'>                                
                            </div>
                                <div className='flex justify-between w-full'>
                                    <span className="">yellow</span>
                                    <span className="">(6)</span>
                                </div>
                            </div>
                            {/* checkbox-4 */}
                            <div className="flex items-center gap-4">
                            <div className='w-5 h-4 rounded-full bg-pink-600'>                                
                            </div>
                                <div className='flex justify-between w-full'>
                                    <span className="">Pink</span>
                                    <span className="">(9)</span>
                                </div>
                            </div>
                            {/* checkbox-5 */}
                            <div className="flex items-center gap-4">
                            <div className='w-5 h-4 rounded-full bg-gray-600'>                                
                            </div>
                                <div className='flex justify-between w-full'>
                                    <span className="">Gray</span>
                                    <span className="">(9)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right container */}
                <div className='w-full'>
                    <div
                        className="bg-white rounded shadow overflow-hidden w-full relative"
                    >
                        {/* Image with absolute positioning */}
                        <img
                            src={cover}
                            alt="Flower"
                            className="w-full h-44 object-cover rounded transform translate transition-transform hover:scale-110"
                        />

                        {/* Absolute positioning for discount button and description */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-5  p-4 bg-gradient-to-t from-black to-transparent opacity-80">
                            {/* Discount Button */}
                            <button className=" bg-red-500 w-fit  px-4 my-3 rounded-full font-semibold text-white z-10 hover:bg-pink-700 transition-all">
                                save up to 20% off
                            </button>
                            {/* title */}
                            <h1 className='text-4xl font-medium text-white'>There are multi type <br /> flower items</h1>

                        </div>
                    </div>
                    {/* cover title and description div */}
                    <div className='mt-3 border-b border-gray-300'>
                        <h1 className='text-2xl font font-medium'>Flower</h1>
                        <p className='font-sans py-2'>Flower ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis, aliquam laudantium vero repellendus nobis cumque quas? Eos, reiciendis ipsam. Lorem, ipsum dolor sit amet</p>
                    </div>
                    {/* icon and search value div */}
                    <div className="flex items-center justify-between pt-6 ">
                        {/* Left side: View toggle and product count */}
                        <div className="flex items-center space-x-4">
                            {/* View Toggle */}
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setView("grid")}
                                    className={`p-2 border border-gray-300 rounded ${view === "grid" ? "bg-gray-200" : "bg-white"}`}
                                >
                                    <FaThLarge />
                                </button>
                                <button
                                    onClick={() => setView("list")}
                                    className={`p-2 border border-gray-300 rounded ${view === "list" ? "bg-gray-200" : "bg-white"}`}
                                >
                                    <FaList />
                                </button>
                            </div>

                            {/* Product Count */}
                            <span className="">There are {totalProducts} products.</span>
                        </div>

                        {/* Right side: Sort dropdown */}
                        <div className="flex items-center space-x-2">
                            <span className="">Sort By:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="border border-gray-300 rounded p-2"
                            >
                                <option value="Relevance">Relevance</option>
                                <option value="PriceLowToHigh">Price: Low to High</option>
                                <option value="PriceHighToLow">Price: High to Low</option>
                                <option value="Newest">Newest</option>
                            </select>
                        </div>
                    </div>

                    {/* flower products map */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-6 gap-6">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;