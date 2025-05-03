import React, { useEffect, useState } from 'react';
import cover from '../../../assets/cover.jpg';
import { FaThLarge, FaList } from 'react-icons/fa';
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
    const [view, setView] = useState('grid');
    const [sort, setSort] = useState('Relevance');
    const [products, setProducts] = useState([]);
    const totalProducts = products.length;

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="max-w-7xl px-4 md:px-8 mx-auto py-6">
            <div className="flex flex-col lg:flex-row gap-15">
                {/* Sidebar */}
                <aside className="lg:w-1/4 ">
                    <div className="flex flex-col gap-4 border rounded p-5 border-gray-300 mb-6">
                        <h1 className="text-xl font-bold border-b border-gray-300 pb-2">Categories</h1>
                        {categories.map((category) => (
                            <div key={category.id} className="hover:underline cursor-pointer text-gray-700">
                                {category.name}
                            </div>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="p-5 border rounded border-gray-300 space-y-4">
                        <h1 className="font-bold border-b border-gray-300 pb-2">Filter By</h1>

                        {/* Availability */}
                        <div>
                            <h2 className="font-medium mb-2">Availability:</h2>
                            {['In Stock', 'Not Available'].map((label, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <input type="checkbox" />
                                    <span className="text-gray-700">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Size */}
                        <div>
                            <h2 className="font-medium mb-2">Size:</h2>
                            {['Small', 'Medium', 'Large', 'Extra Large'].map((size, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <input type="checkbox" />
                                    <span className="text-gray-700">{size}</span>
                                </div>
                            ))}
                        </div>

                        {/* Color */}
                        <div>
                            <h2 className="font-medium mb-2">Color:</h2>
                            {[
                                { name: 'Blue', color: 'bg-blue-600' },
                                { name: 'Red', color: 'bg-red-600' },
                                { name: 'Yellow', color: 'bg-yellow-500' },
                                { name: 'Pink', color: 'bg-pink-500' },
                                { name: 'Gray', color: 'bg-gray-500' },
                            ].map((clr, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-full ${clr.color}`}></div>
                                    <span className="text-gray-700">{clr.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Banner */}
                    <div className="relative w-full  overflow-hidden rounded-lg shadow">
                        <img
                            src={cover}
                            alt="Cover"
                            className="w-full h-48 object-cover transform transition-transform hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center px-6 md:px-10">
                            <button className="bg-red-500 text-white px-4 py-1 rounded-full mb-3 w-fit text-sm">
                                Save up to 20% off
                            </button>
                            <h1 className="text-white text-2xl md:text-4xl font-semibold">
                                There are multi-type <br /> flower items
                            </h1>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="mt-5 border-b pb-4">
                        <h2 className="text-2xl font-semibold">Flower</h2>
                        <p className="text-gray-600 mt-2">
                            Flower ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis, aliquam
                            laudantium vero repellendus nobis cumque quas? Eos, reiciendis ipsam.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setView('grid')}
                                className={`p-2 border rounded ${view === 'grid' ? 'bg-gray-200' : ''}`}
                            >
                                <FaThLarge />
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`p-2 border rounded ${view === 'list' ? 'bg-gray-200' : ''}`}
                            >
                                <FaList />
                            </button>
                            <span className="text-gray-600 ml-3">There are {totalProducts} products.</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="sort" className="text-gray-600">
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="border rounded px-2 py-1"
                            >
                                <option value="Relevance">Relevance</option>
                                <option value="PriceLowToHigh">Price: Low to High</option>
                                <option value="PriceHighToLow">Price: High to Low</option>
                                <option value="Newest">Newest</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div
                        className={`grid ${
                            view === 'grid'
                                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
                                : 'grid-cols-1 gap-6'
                        } mt-6`}
                    >
                        {products.map((product) => (
                            <Product key={product.id} product={product} view={view} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default About;
