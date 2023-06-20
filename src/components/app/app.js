import React, {useState} from 'react';

import './app.css';
import {Route, Routes, Router, Outlet} from "react-router-dom";
import Header from "../header";
import Form from "../form";

import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";
import useAccessToken from "../useAccessToken";
import login from "../../services/service";


// const queryClient = new QueryClient()




const App = () => {


    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default App;

