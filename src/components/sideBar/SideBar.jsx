import React, {useState} from 'react';
import './SideBar.css';


const SideBar = ({onSelectCategory, selectedCategory}) => {

    const [categories, setCategories] = useState(['T-shirts', 'Pants', 'Dresses', 'Jackets'])



    return (
        <div className='sidebar'>
            <ul className="sidebar__menu">
                {
                    categories.map((item) => (
                        <li key={item} onClick={() => onSelectCategory(item)}
                            className={`sidebar__menu-item ${item === selectedCategory ? 'sidebar__menu-item--active' : ''}`}>{item}
                            <div className="arrow"></div>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default SideBar;