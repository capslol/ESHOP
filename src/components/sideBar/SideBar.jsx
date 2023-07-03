import React, {useState} from 'react';
import './SideBar.css';


const SideBar = ({onSelectCategory}) => {

    const [categories, setCategories] = useState(['Футболки', 'Штаны', 'Платья', 'Верхняя одежда'])


    return (
        <div className='sidebar'>
            <form className="sidebar__search-bar"><input type="text"/></form>
            <ul className="sidebar__menu">
                {
                    categories.map((item) => (
                        <li key={item} onClick={() => onSelectCategory(item)} className="sidebar__menu-item">{item}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default SideBar;