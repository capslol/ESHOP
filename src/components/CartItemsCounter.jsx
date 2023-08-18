import React, {useMemo} from 'react';
import {useCart} from "../contexts/CartProvider";


const CartItemsCounter = ({productId}) => {

    const { cartItems } = useCart()

    const selectedProduct = useMemo(
        () => cartItems.find((item) => item.id === productId),
        [cartItems, productId]
    );

    const productQuantity = useMemo(
        () => productId ? cartItems.find((item) => item.id === productId)?.quantity : cartItems.length,
        [cartItems, productId]
    );
    return (
        <>
            {productQuantity ?? 0}
        </>
    );
};

export default CartItemsCounter;