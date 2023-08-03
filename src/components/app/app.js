import React from 'react';

import './app.css';
import {Outlet} from "react-router-dom";
import Header from "../header";
import {ProductsProvider} from "../ProductsProvider";
import {CartProvider} from "../CartProvider";
import {ThemeProvider, useTheme} from "../ThemeProvider";
import ThemeWrapper from "../ThemeWrapper";

const App = () => {
    const theme = useTheme()
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

