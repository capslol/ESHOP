import React, {useState} from 'react';

import './app.css';
import {Outlet} from "react-router-dom";
import Header from "../header";
import useAccessToken from "../useAccessToken";
import {ProductsProvider} from "../ProductsProvider";


// const queryClient = new QueryClient()


const App = () => {
    return (
        <>
            <ProductsProvider>
                    <Header/>
                    <Outlet/>
            </ProductsProvider>
        </>
    );
};

export default App;

