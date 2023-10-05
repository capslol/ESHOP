import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';
const accessTokenKey = 'accessToken'; // Добавляем ключ для localStorage

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // 1. Создаем состояние для хранения access token в контексте
    const [accessToken, setAccessToken] = useState(localStorage.getItem(accessTokenKey) || null);

    // 2. Создаем функции для управления access token
    const setNewAccessToken = useCallback((newAccessToken) => {
        localStorage.setItem(accessTokenKey, newAccessToken);
        setAccessToken(newAccessToken);
    }, []);

    const removeAccessToken = useCallback(() => {
        localStorage.removeItem(accessTokenKey);
        setAccessToken(null);
    }, []);

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
    }, [accessToken, setNewAccessToken, user]);

    // 7. Создаем объект value для передачи в контекст
    const value = useMemo(() => ({
        user,
        login,
        removeAccessToken,
        accessToken
    }), [user, login, removeAccessToken, accessToken]);

    return (
        // 8. Предоставляем контекст с данными о пользователе и функцией для входа
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
