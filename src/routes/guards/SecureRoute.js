import React from 'react';
import useAccessToken from "../../components/useAccessToken";
import {Navigate, Outlet} from "react-router-dom";

const SecureRoute = () => {
    const {value} = useAccessToken()
    if (!value) {
        return <Navigate to={'/login'} replace/>
    }

    return <Outlet/>
};

export default SecureRoute;