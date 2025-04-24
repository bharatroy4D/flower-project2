import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Top from '../Components/Top/Top';
import MiddleTop from '../Components/Top/MiddleTop';
import Footer from '../Components/Footer/Footer';
import Service from '../Components/Service/Service';

const Root = () => {
    return (
        <div>
            <Top></Top>
            <MiddleTop></MiddleTop>
            <Header></Header>
            <Outlet></Outlet>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Root;