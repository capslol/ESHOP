import React from 'react';
import {useCart} from "./CartProvider";
import CartItemsCounter from "./CartItemsCounter";

const AddToCartButton = ({product}) => {
    const {addToCart} = useCart()
    return (
        <button
            className='catalog__item-button'
            onClick={() => addToCart(product)}
            type="submit">
            Add to cart (<CartItemsCounter productId={product.id}/>)
        </button>
    );
};

// concurent rendering mode
// useTransition
// система реактивности во Vue 3

export default AddToCartButton;