import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

import {useQuery} from "react-query";
import axios from "axios";
import {ProductsContext} from "./ProductsProvider";

const API_URL = 'http://localhost:8000/api'
export const httpContext = createContext();

const accessTokenKey = 'accessToken'
const useAccessToken = () => {

    const [accessToken, setAccessToken] = useState(localStorage.getItem(accessTokenKey)) // null || string

    const setNewAccessToken = useCallback((newAccessToken) => {
        localStorage.setItem(accessTokenKey, newAccessToken)
        setAccessToken(newAccessToken)
    }, [])

    const removeAccessToken = useCallback(() => {
        localStorage.removeItem(accessTokenKey)
        setAccessToken(null)
    }, [accessToken])

    return {
        setNewAccessToken,
        removeAccessToken,
        accessToken
    }

};


export const HTTPProvider = ({children}) => {
    const { setNewAccessToken, removeAccessToken, accessToken } = useAccessToken();







    return (
        <httpContext.Provider value={{setNewAccessToken, removeAccessToken, accessToken }}>
            {children}
        </httpContext.Provider>
    );
}
export const useHTTP =  () => {
    return useContext(httpContext)
}


