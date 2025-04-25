import React from 'react';
import useFlower from '../CustomHooks/useFlower';
import Trending from './Trending';

const Trendings = () => {
    const [flowers] = useFlower();

    return (
        <div className='px-10'>
            <h1 className='text-3xl font-bold pb-8 font-sans'>Trending Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    flowers.map(flower => <Trending key={flower.id} flower={flower}></Trending>)
                }
            </div>
        </div>
    );
};

export default Trendings;