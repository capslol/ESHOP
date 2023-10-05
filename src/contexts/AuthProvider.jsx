import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import {useHTTP} from "./HTTPProvider";




export const AuthContext = createContext();

const API_URL = 'http://localhost:8000/api';


export const AuthProvider = ({children}) => {
    const { setNewAccessToken } = useHTTP()

    // 3. Используем React Query для получения информации о текущем пользователе
    // const user = useQuery(['users', 'current'], () => {
    //     return axios.get(`${API_URL}/users/current`, {
    //         headers: {Authorization: `Bearer ${token}`},
    //     });
    // });

    const user = {}

    // 4. Создаем функцию для выполнения входа
    const login = useCallback(async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {email, password});
            const newToken = response.data.access_token;

            // 5. Сохраняем новый access token
            setNewAccessToken(newToken);
            return newToken; // Возвращаем access token

            // 6. Перезагружаем информацию о пользователе
            // user.refetch();
        } catch (error) {
            // Обработка ошибки входа
            console.error('Ошибка входа:', error);
            throw error;
        }
    }, [, setNewAccessToken, user]);

    // 7. Создаем объект value для передачи в контекст
    const value = useMemo(() => ({
        user,
        login,
    }), [user, login]);

    return (
        // 8. Предоставляем контекст с данными о пользователе и функцией для входа
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
