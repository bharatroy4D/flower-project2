import React from 'react';
import user_1 from '../../assets/user1.jpg';
import user_2 from '../../assets/user2.jpg';
import user_3 from '../../assets/user3.jpg';

const clientsData = [
    {
        name: 'John Doe',
        position: 'Florist, Green Bloom',
        description: 'Amazing service! I always get my flower supplies delivered on time and in perfect condition my flower supplies delivered on time and in perfect condition.',
        image: user_1
    },
    {
        name: 'Ayesha Khan',
        position: 'Event Planner, Rose Events',
        description: 'Their flowers added elegance to my events. Truly fresh and vibrant every single time! my flower supplies delivered on time and in perfect condition',
        image: user_2
    },
    {
        name: 'Rahul Mehta',
        position: 'Manager, The Flower Spot',
        description: 'Great quality products and fast shipping. Highly recommended for floral business ownersmy flower supplies delivered on time and in perfect condition',
        image: user_3
    },
];

const Clients = () => {
    return (
        <div className="w-9/12 mx-auto py-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {clientsData.map((client, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <img 
                                src={client.image} 
                                alt={client.name} 
                                className="w-14 h-14 rounded-full object-cover border border-gray-300" 
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{client.name}</h3>
                                <p className="text-sm text-gray-500">{client.position}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700">{client.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
