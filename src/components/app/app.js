import React from 'react';

import './app.css';
import {ProductsProvider} from "../../contexts/ProductsProvider";
import {CartProvider} from "../../contexts/CartProvider";
import {ThemeProvider} from "../../contexts/ThemeProvider";
import ThemeWrapper from "../ThemeWrapper";
import {HTTPProvider} from "../../contexts/HTTPProvider";

const App = () => {
    return (
        <>
            <HTTPProvider>
                <ThemeProvider>
                    <ProductsProvider>
                        <CartProvider>
                            <ThemeWrapper/> {/* внутри лежит header и outlet */}
                        </CartProvider>
                    </ProductsProvider>
                </ThemeProvider>
            </HTTPProvider>

        </>
    );
};

export default App;

