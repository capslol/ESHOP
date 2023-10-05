import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useAuth} from "./AuthProvider";

const HTTPContext = createContext();
const API_URL = 'http://localhost:8000/api';
const accessTokenKey = 'accessToken'; // Добавляем ключ для localStorage


export const useHTTP = () => useContext(HTTPContext);

export const HTTPProvider = ({children}) => {
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


    // Функция для получения продуктов
    const getProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/products`, {
                headers: `Bearer ${accessToken}`
            });
            console.log(response)
            return response
        } catch (error) {
            console.error('Ошибка при загрузке продуктов:', error);
        }
    };

    // Вызываем функцию для получения продуктов при загрузке приложения

    const contextValue = {
        setNewAccessToken,
        removeAccessToken,
        accessToken,
        getProducts
    };

    return (
        <HTTPContext.Provider value={contextValue}>
            {children}
        </HTTPContext.Provider>
    );
};
