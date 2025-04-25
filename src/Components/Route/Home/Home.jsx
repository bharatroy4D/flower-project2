import React from 'react';
import Hero from './Hero/Hero';
import Clients from '../../Clients/Clients';
import Trendings from '../../Trendings/Trendings';
import Discount from '../../Discount/Discount';
import Service from '../../Service/Service';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Trendings></Trendings>
      <Discount></Discount>
      <Clients></Clients>
      <Service></Service>
    
    </div>
  );
};

export default Home;