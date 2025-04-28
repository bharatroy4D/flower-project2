import React from 'react';

const Discount = () => {
    const cards = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/id/169977992/photo/yellow-tulips.jpg?s=612x612&w=0&k=20&c=0XGWY6p0HRlp_dAAB_eFmuXUQGcz9mVZHp5LHrNeLig=',
            discount: '50% OFF on Roses',
            title:'All of top flower items',
            description: 'Get 50% off on all rose bouquets. Perfect for any occasion!',
        },
        {
            id: 2,
            img: 'https://t3.ftcdn.net/jpg/07/05/84/56/360_F_705845685_e1GJvNw3usEWEkxokUGTnWpX42Yvkh10.jpg',
            discount: '30% OFF on Tulips',
            title:'World of top latest  flower',
            description: 'Special offer on tulips! Limited time only.',
        },
    ];

    return (
        <div className=" w-9/12 mx-auto  mt-7 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Render both cards */}
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded shadow overflow-hidden w-full relative"
                    >
                        {/* Image with absolute positioning */}
                        <img
                            src={card.img}
                            alt="Flower"
                            className="w-full h-56 object-cover rounded transform translate transition-transform hover:scale-110"
                        />

                        {/* Absolute positioning for discount button and description */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center  p-4 bg-gradient-to-t from-black to-transparent opacity-80">
                            {/* Discount Button */}
                            <button className=" bg-red-600 text-white w-fit py-1 px-4 my-3 rounded-full font-semibold text-sm z-10 hover:bg-pink-700 transition-all">
                                {card.discount}
                            </button>
                            {/* title */}
                            <h1 className='text-3xl font-medium text-white'>{card.title}</h1>
                            {/* Description */}
                            <div className="text-white z-10 mt-2">
                                <p className="">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discount;
