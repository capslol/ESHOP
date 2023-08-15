import React from 'react';

import './app.css';
import {ProductsProvider} from "../ProductsProvider";
import {CartProvider} from "../CartProvider";
import {ThemeProvider} from "../ThemeProvider";
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

