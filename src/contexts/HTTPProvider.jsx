import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';

import {useQuery} from "react-query";
import axios from "axios";
import {ProductsContext} from "./ProductsProvider";

const API_URL = 'http://localhost:8000/api'
export const httpContext = createContext();

const accessTokenKey = 'accessToken'

export const HTTPProvider = ({children}) => {
    // const { setNewAccessToken, removeAccessToken, accessToken } = useAccessToken();

    return (
        <httpContext.Provider value={{}}>
            {children}
        </httpContext.Provider>
    );
}
export const useHTTP =  () => {
    return useContext(httpContext)
}


