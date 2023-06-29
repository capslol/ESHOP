import React, {useState} from 'react';

import './app.css';
import {Route, Routes, Router, Outlet} from "react-router-dom";
import Header from "../header";
import Form from "../form";

import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";
import useAccessToken from "../useAccessToken";
import login from "../../services/service";
import SideBar from "../sideBar/SideBar";
import AppContext from "../appContext";


// const queryClient = new QueryClient()


const App = () => {

    const products = [
        {
            id: 1,
            name: "Футболка",
            category: "Футболки",
            price: 29.99,
            imageUrl: "https://files.gifts.ru/reviewer/tb/13/6140.60_73_500.jpg",
            images:['images/1.png','images/2.png','images/3.png']

        },
        {
            id: 2,
            name: "Джинсы",
            category: "Штаны",
            price: 59.99,
            imageUrl: "https://incity.ru/upload/iblock/d62/uojfr3zb5o3w738hx3cuw0izs6b13y3c.jpg"
        },
        {
            id: 3,
            name: "Платье",
            category: "Платья",
            price: 79.99,
            imageUrl: "https://cdn-images.farfetch-contents.com/20/09/00/87/20090087_50097193_300.jpg"
        },
        {
            id: 30,
            name: "Куртка",
            category: "Верхняя одежда",
            price: 129.99,
            imageUrl: "https://static.housebrand.com/media/catalog/product/cache/850/a4e40ebdc3e371adff845072e1c73f37/5/3/5385I-99X-051-1_4.jpg"
        }
    ]


    return (
        <>
            <AppContext.Provider value={products}>
                <Header/>
                <Outlet/>
            </AppContext.Provider>


        </>
    );
};

export default App;

