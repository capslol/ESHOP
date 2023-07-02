import React, {useContext} from 'react';
import axios from "axios";
import './catalog.css'
import AppContext from "../appContext";
import CatalogItem from "../catalogItem/catalogItem";
import {CartContext} from "../cartContext";

const Catalog = ({selectedCategory}) => {
    const products = useContext(AppContext)
    const { addToCart } = useContext(CartContext)


    const handleAddToCart = (product) => {
        addToCart(product)
    }

    const filteredProducts = products.filter((item) => item.category === selectedCategory)

    return (
            <div className='catalog'>
                {
                    filteredProducts.map((product) => (
                        <CatalogItem onAddToCart={handleAddToCart} product={product}/>
                    ))
                }
            </div>
    )
};

export default Catalog;

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://world.openfoodfacts.org/cgi/search.pl?json=1&action=process&sort_by=random&page_size=100');
//             console.log(response.products.products)
//             setData(response.products.products);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };
//
//     fetchData();
// }, []);