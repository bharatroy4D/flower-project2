import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Top from '../Components/Top/Top';
import MiddleTop from '../Components/Top/MiddleTop';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Top></Top>
            <MiddleTop></MiddleTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;