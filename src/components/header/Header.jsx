import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import CartItemsCounter from "../CartItemsCounter";



const Header = () => {

    return (
        <header className='header'>
            <div className="header-nav">
                <NavLink to={'/'} className="header-nav__item">
                    <span>Home</span>
                </NavLink>
                <NavLink to={'/catalog'} className="header-nav__item">
                    <span>Catalog</span>
                </NavLink>
                <NavLink to={'/promo'} className="header-nav__item">
                    <span>Promo</span>
                </NavLink>
                <NavLink to={'/cart'} className="header-nav__item">
                    <span>Cart</span>
                    <span className={'header__cart-counter'}><CartItemsCounter /></span>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;