import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import Top from '../Components/Top/Top';

const Root = () => {
    return (
        <div>
            <Top></Top>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;