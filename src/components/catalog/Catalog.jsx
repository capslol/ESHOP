import React, {useEffect, useState} from 'react';
import axios from "axios";
import './catalog.css'

const Catalog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://world.openfoodfacts.org/cgi/search.pl?json=1&action=process&sort_by=random&page_size=100');
                console.log(response.data.products)
                setData(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
            <div className='catalog'>

                {
                    data.map((item) => (
                        <div className='catalog__item' key={item.name}>
                            <img src={item.image_url} alt=""/>
                            <p>{item.ingredients_text}</p>
                        </div>
                    ))
                }
            </div>
    )
};

export default Catalog;