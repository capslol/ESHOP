import React, {useState} from 'react';

import './app.css';
import {Outlet} from "react-router-dom";
import Header from "../header";
import useAccessToken from "../useAccessToken";
import {CartProvider} from "../cartContext";
import {ProductsProvider} from "../ProductsProvider";


// const queryClient = new QueryClient()


const App = () => {
    return (
        <>
            <ProductsProvider>
                <CartProvider>
                    <Header/>
                    <Outlet/>
                </CartProvider>
            </ProductsProvider>
        </>
    );
};

export default App;

