import React from 'react';

import './app.css';
import {ProductsProvider} from "../../contexts/ProductsProvider";
import {CartProvider} from "../../contexts/CartProvider";
import {ThemeProvider} from "../../contexts/ThemeProvider";
import ThemeWrapper from "../ThemeWrapper";

const App = () => {
    return (
        <>
            <ThemeProvider>
                <ProductsProvider>
                    <CartProvider>
                        <ThemeWrapper/>  {/* внутри лежит header и outlet */}
                    </CartProvider>
                </ProductsProvider>
            </ThemeProvider>
        </>
    );
};

export default App;

