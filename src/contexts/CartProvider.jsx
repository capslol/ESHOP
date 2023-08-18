import React, {createContext, useCallback, useContext,  useState} from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
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

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart =  () => {
    return useContext(CartContext)
}