import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import './catalog.css'
import AppContext from "../appContext";

const Catalog = ({selectedCategory}) => {
    // const [products, setProducts] = useState();

    const products = useContext(AppContext)
    const filteredProducts = products.filter((item) => item.category === selectedCategory)

    return (
            <div className='catalog'>
                {
                    filteredProducts.map((product) => (
                        <div  className='catalog__item' key={product.id}>
                            <img src={product.imageUrl} alt=""/>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
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