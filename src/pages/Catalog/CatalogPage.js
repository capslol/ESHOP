import React, {useEffect, useState} from 'react';
import useAccessToken from "../../components/useAccessToken";
import axios from "axios";
import SideBar from "../../components/sideBar/SideBar";
import Catalog from "../../components/catalog/Catalog";



const CatalogPage =  () => {
    const [selectedCategory, setSelectedCategory] = useState([1,2,3,4])
    const handleCategorySelect  = (category) => {
        console.log(category)
        setSelectedCategory(category)
    }


    return (
        <div className={'catalog-wrapper'}>
            <SideBar onSelectCategory={handleCategorySelect}/>
            <Catalog selectedCategory={selectedCategory}/>
        </div>
    );
};

export default CatalogPage;