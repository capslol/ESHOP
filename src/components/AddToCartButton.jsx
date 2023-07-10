import React from 'react';
import useCart from "./useCart";

const AddToCartButton = ({product}) => {
    const {addToCart} = useCart()
    return (
            <button onClick={() => addToCart(product)} type="submit">Add to cart</button>
    );
};

// concurent rendering mode
// useTransition
// система реактивности во Vue 3

export default AddToCartButton;