import React, {useContext, useMemo} from 'react';
import './catalog.css'
import CatalogItem from "../catalogItem/catalogItem";
import {useProducts} from "../ProductsProvider";

const Catalog = ({selectedCategory}) => {
    const products = useProducts()

    const filteredProducts = useMemo(
        () =>
            products.filter((item) => item.category === selectedCategory),
        [products, selectedCategory])

    return (
        <div className='catalog'>
            {
                filteredProducts.map((product) => (
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