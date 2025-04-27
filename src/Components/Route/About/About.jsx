import React, { useEffect, useState } from 'react';

const categories = [
    { id: 1, name: 'Common' },
    { id: 2, name: 'Rare' },
    { id: 3, name: 'Fragrant' },
    { id: 4, name: 'Seasonal' },
    { id: 5, name: 'Wild' },
    { id: 6, name: 'Exotic' },
];
const About = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto py-5'>
            <div className='flex gap-10'>
                {/* left container */}
                <div className='w-1/4'>
                    {/*flower of  category */}
                    <div className='flex flex-col gap-4 border rounded p-5 border-gray-300 '>
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
                    <div className='p-4 border rounded border-gray-400/40 my-5 '>
                        <h1 className='font-bold border-b border-gray-400/50 pb-1'>Filter By</h1>
                        <h2 className='py-2'>Availability</h2>

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
                        <div className='pt-7'>
                            <h2 className='py-2'>Size</h2>

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
                    </div>
                </div>
                {/* right container */}
                <div className='w-full border rounded'>
                        <h1>amar sonar banlga

                        </h1>
                </div>

            </div>

        </div>
    );
};

export default About;