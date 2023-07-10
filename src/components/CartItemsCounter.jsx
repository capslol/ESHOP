import React, {useMemo} from 'react';
import useCart from "./useCart";


const CartItemsCounter = ({productId}) => {

    const { cartItems } = useCart()

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