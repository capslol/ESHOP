import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Получение данных из localStorage при инициализации
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    useEffect(() => {
        // Сохранение данных в localStorage при изменении
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        console.log(item)
        console.log(cartItems)
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            // Если товар уже есть в корзине, увеличиваем количество
            setCartItems((prevCartItems) => {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[itemIndex].quantity += 1;
                return updatedCartItems;
            });
        } else {
            // Если товара нет в корзине, добавляем его
            setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
