import React from 'react';
import Hero from './Hero/Hero';
import Clients from '../../Clients/Clients';
import Trendings from '../../Trendings/Trendings';
import Discount from '../../Discount/Discount';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Trendings></Trendings>
      <Discount></Discount>
      <Clients></Clients>
    </div>
  );
};

export default Home;