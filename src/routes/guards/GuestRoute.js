import React from 'react';

import {Navigate, Outlet} from "react-router-dom";

const GuestRoute = () => {
    // const {value} = useAccessToken()
    // const value = false
    // if(value){
    //     return <Navigate to={'/catalog'} replace/>
    // }

    return <Outlet/>

};

export default GuestRoute;