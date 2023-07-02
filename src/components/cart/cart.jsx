import React, {useContext} from 'react';
import {CartContext} from "../cartContext";
import './cart.css'

const Cart = () => {
    const {cartItems, removeFromCart} = useContext(CartContext)

    let countByCategory = {}

    cartItems.forEach((item) => {
        const {category, quantity} = item
        countByCategory[item.category] = (countByCategory[category] || 0) + quantity;
    })

    return (
        <div className={'cart'}>
            {
                cartItems.map((item) => (
                    <div className={'cart__item'}>
                        <div className={'cart__item-name'}>{item.name}</div>
                        <div className={'cart__item-price'}>{item.price}</div>
                        <div className={'cart__item-quantity'}>{item.quantity}</div>
                        <div className={'cart__item-total'}>{item.price * item.quantity}</div>
                        <button className={'cart__remove-btn'} onClick={() => removeFromCart(item.id)}>delete</button>
                    </div>
                ))
            }
            <div className="categories-counter">

            </div>
        </div>
    );
};

export default Cart;