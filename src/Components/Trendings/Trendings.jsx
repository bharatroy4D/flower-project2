import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // React icons import
import useFlower from '../CustomHooks/useFlower';
import Trending from './Trending';
import Slider from "react-slick"; // react-slick import
import "slick-carousel/slick/slick.css";  // slick css
import "slick-carousel/slick/slick-theme.css";  // slick theme css

const Trendings = () => {
    const [flowers] = useFlower();

    const settings = {
        speed: 500,
        slidesToShow: 4,  // Default number of slides shown (for large screens)
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: (
            <div className="slick-arrow slick-next flex items-center justify-center bg-white bg-opacity-50 rounded-full p-2 shadow-lg hover:bg-opacity-75">
                <FaChevronRight className="text-xl text-gray-400" /> {/* Right Arrow */}
            </div>
        ),
        prevArrow: (
            <div className="slick-arrow slick-prev flex items-center justify-center bg-white bg-opacity-50 rounded-full p-1 shadow-lg hover:bg-opacity-75">
                <FaChevronLeft className="text-xl text-gray-400" /> {/* Left Arrow */}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024, // For medium-sized screens (tablet)
                settings: {
                    slidesToShow: 3, // Show 3 slides for medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // For small-sized screens (mobile)
                settings: {
                    slidesToShow: 1, // Show 1 slide for small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
<<<<<<< HEAD
        <div className='lg:max-w-7xl lg:px-10 px-5 mx-auto py-6'>
=======
        <div className='w-9/12 mx-auto py-6'>
>>>>>>> dfe08274c457a72b154845a6ebf52a050ed38bbb
            <h1 className='text-2xl lg:text-3xl  font-bold pb-8 font-sans'>Trending Collection</h1>

            {/* Slider with custom arrows */}
            <Slider {...settings}>
                {
                    flowers.map(flower => (
                        <div key={flower.id} className="px-2">
                            <Trending flower={flower} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Trendings;
