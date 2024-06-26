import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import CartItemsCounter from "../CartItemsCounter";
import {useTheme} from "../../contexts/ThemeProvider";
import {useAuth} from "../../contexts/AuthProvider";


const Header = () => {
    const {changeTheme} = useTheme()
    const {removeAccessToken} = useAuth()

    return (
        <header className='header'>
            <img className={'header_logo'} src="/images/logo.png" alt=""/>
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
                    <span className={'header__cart-counter'}><CartItemsCounter/></span>
                </NavLink>
                <button onClick={() => changeTheme()}></button>
                <button onClick={() => removeAccessToken()}> Log out</button>
            </div>
        </header>
    );
}

export default Header;