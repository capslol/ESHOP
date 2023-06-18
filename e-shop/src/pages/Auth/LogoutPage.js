import React, {useEffect} from 'react';
import useAccessToken from "../../components/useAccessToken";
import {Navigate, Outlet} from "react-router-dom";

const LogoutPage = () => {
    const { remove } = useAccessToken()

    useEffect(() => {
        remove()
    },[remove])

    return (
        <>
            <h1>Logout</h1>
        </>
    )

};

export default LogoutPage;