import React from 'react';
import {useTheme} from "./ThemeProvider";
import Header from "./header";
import {Outlet} from "react-router-dom";


const ThemeWrapper = () => {
    const {theme} = useTheme(); // Получаем значение темы с помощью useTheme()

    return (
        <div className={'app-container'} data-theme={theme}>
            <Header />
            <Outlet />
        </div>
    );
};

export default ThemeWrapper;