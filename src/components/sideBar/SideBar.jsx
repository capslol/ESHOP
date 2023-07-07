import React, {useState} from 'react';
import './SideBar.css';


const SideBar = ({onSelectCategory, selectedCategory}) => {
    const [query, setQuery] = useState()

    const [categories, setCategories] = useState(['T-shirts', 'Pants', 'Dresses', 'Jackets'])

    const handleOnSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget
        setQuery(value)
    }

    return (
        <div className='sidebar'>
            <form className="sidebar__search">
                <input placeholder='Search'
                       className='search-bar'
                       type="text"
                       onChange={handleOnSearch}
                       value={query}/>
            </form>
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