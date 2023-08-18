import React, {useEffect, useState} from 'react';
import useAccessToken from "../../hooks/useAccessToken";
import axios from "axios";
import SideBar from "../../components/sideBar/SideBar";
import Catalog from "../../components/catalog/Catalog";
import {useTheme} from "../../contexts/ThemeProvider";



const CatalogPage =  () => {
    const {theme} = useTheme()
    const [selectedCategory, setSelectedCategory] = useState()
    const handleCategorySelect  = (category) => {
        setSelectedCategory(category)
    }


    return (
        <div className={'catalog-wrapper'} data-theme={theme}>
            <SideBar selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect}/>
            <Catalog selectedCategory={selectedCategory}/>
        </div>
    );
};

export default CatalogPage;