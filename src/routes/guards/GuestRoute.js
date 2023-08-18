import React from 'react';
import useAccessToken from "../../hooks/useAccessToken";
import {Navigate, Outlet} from "react-router-dom";

const GuestRoute = () => {
    const {value} = useAccessToken()
    if(value){
        return <Navigate to={'/catalog'} replace/>
    }

    return <Outlet/>

};

export default GuestRoute;