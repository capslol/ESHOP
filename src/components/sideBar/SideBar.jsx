import React, {useState} from 'react';
import './SideBar.css';


const SideBar = ({onSelectCategory}) => {


    return (
        <div className='sidebar'>
            <form className="sidebar__search-bar"><input type="text"/></form>
            <ul className="sidebar__menu">
                <li onClick={ () => onSelectCategory(1)} className="sidebar__menu-item">1</li>
                <li onClick={ () => onSelectCategory(2)} className="sidebar__menu-item">2</li>
                <li onClick={ () => onSelectCategory(3)} className="sidebar__menu-item">3</li>
                <li onClick={ () => onSelectCategory(4)} className="sidebar__menu-item">4</li>
            </ul>

        </div>
    );
};

export default SideBar;