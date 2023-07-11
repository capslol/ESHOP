import React, {useEffect, useState} from 'react';
import useAccessToken from "../../components/useAccessToken";
import axios from "axios";
import SideBar from "../../components/sideBar/SideBar";
import Catalog from "../../components/catalog/Catalog";



const CatalogPage =  () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const handleCategorySelect  = (category) => {
        setSelectedCategory(category)
    }


    return (
        <div className={'catalog-wrapper'}>
            <SideBar selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect}/>
            <Catalog selectedCategory={selectedCategory}/>
        </div>
    );
};

export default CatalogPage;