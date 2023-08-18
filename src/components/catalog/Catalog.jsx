import React, {useContext, useMemo, useState} from 'react';
import './catalog.css'
import CatalogItem from "../catalogItem/catalogItem";
import {useProducts} from "../../contexts/ProductsProvider";
import Fuse from "fuse.js";

const Catalog = ({selectedCategory}) => {

    const products = useProducts()

    const filteredProducts = selectedCategory ? products.filter((item) => item.category === selectedCategory) : products

    // search
    const [query, setQuery] = useState('')

    const fuse = new Fuse(filteredProducts, {
        keys: ['name', 'category'],
        includeScore: true
    })
    const results = fuse.search(query)
    const productsToDisplay = query ? results.map(result => result.item) : filteredProducts
    const handleOnSearch = ({currentTarget = {}}) => {
        const {value} = currentTarget
        setQuery(value)
    } // search



    return (
        <div className='catalog'>
            <form className="search-wrapper">
                <input placeholder='Search'
                       className='search-bar'
                       type="text"
                       onChange={handleOnSearch}
                       value={query}/>
            </form>
            {
                productsToDisplay.map((product) => (
                    <CatalogItem key={product.id} product={product}/>
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