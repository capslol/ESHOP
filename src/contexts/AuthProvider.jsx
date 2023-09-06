import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {useQuery} from "react-query";
import axios from "axios";

const API_URL = 'http://localhost:8000/api'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    // const [token, setToken] = useAccessToken();

    const user = useQuery({
        queryKey: ['users', 'current'],
        queryFn: () => axios.get(`${API_URL}/api/users/current`, {headers: {Authorization: `Bearer ${token}`}}),
    });

    const login = useCallback((email, password) => {
        const response = axios.post(`${API_URL}/api/auth/login`, {email, password});
        setToken(response.data.token);
    }, []);

    const value = useMemo(() => ({user, login}), [user, login]);

    // 1. Login
    // 2. Refresh user via `user.refetch()`

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}