import React from 'react';

import {Navigate, Outlet} from "react-router-dom";
import {useHTTP} from "../../contexts/HTTPProvider";
import {useAuth} from "../../contexts/AuthProvider";

const SecureRoute = () => {

    const {accessToken} = useAuth()
    console.log(accessToken)
    if (!accessToken) {
        return <Navigate to={'/login'} replace/>
    }

    return <Outlet/>
};

export default SecureRoute;