import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Top from '../Components/Top/Top';
import MiddleTop from '../Components/Top/MiddleTop';

const Root = () => {
    return (
        <div>
            <Top></Top>
            <MiddleTop></MiddleTop>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;