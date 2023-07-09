import React, {useCallback, useState} from 'react';

const useCart = () => {
    // const savedCartItems = localStorage.getItem('cartItems');
    // if (savedCartItems) {
    //     setCartItems(JSON.parse(savedCartItems));
    // }

    const [cartItems, setCartItems] = useState([]);

    const addToCart = useCallback((item) => {
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
    },[cartItems]);


    const removeFromCart = useCallback((itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    },[]);

    return {
        cartItems,
        addToCart,
        removeFromCart
    }
}
export default useCart;


