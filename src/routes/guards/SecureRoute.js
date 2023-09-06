import React from 'react';

import {Navigate, Outlet} from "react-router-dom";

const SecureRoute = () => {

    // const {value} = useAccessToken()
    const value = false
    if (!value) {
        return <Navigate to={'/login'} replace/>
    }

    return <Outlet/>
};

export default SecureRoute;