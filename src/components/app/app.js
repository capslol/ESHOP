import React from 'react';

import './app.css';
import {Outlet} from "react-router-dom";
import Header from "../header";
import {ProductsProvider} from "../ProductsProvider";
import {CartProvider} from "../CartProvider";

const App = () => {
    return (
        <div className="app-container">
            <ProductsProvider>
                <CartProvider>
                    <Header/>
                    <Outlet/>
                </CartProvider>
            </ProductsProvider>
        </div>
    );
};

export default App;

