import React from 'react';
import { FaShippingFast, FaGift, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

const services = [
    {
        id: 1,
        icon: <FaShippingFast className="text-3xl text-green-600" />,
        title: "Fast Shipping",
    },
    {
        id: 2,
        icon: <MdOutlineAttachMoney className="text-3xl text-green-600" />,
        title: "Cash on Delivery",
    },
    {
        id: 3,
        icon: <FaGift className="text-3xl text-green-600" />,
        title: "Special Offers",
    },
    {
        id: 4,
        icon: <FaPhoneAlt className="text-3xl text-green-600" />,
        title: "24/7 Support",
    },
];

const Service = () => {
    return (
        <div className="bg-green-50 py-10 px-4 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-base-100 shadow rounded-lg p-6 flex flex-col items-center text-center  transition">
                        {service.icon}
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
