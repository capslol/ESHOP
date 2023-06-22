import React, {useEffect, useState} from 'react';
import axios from "axios";
import './catalog.css'

const Catalog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/planets/');
                console.log(response.data.results)
                setData(response.data.results);
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
                        <div key={item.name}>
                            <h1>{item.name}</h1>
                            <p>{item.population}</p>
                        </div>
                    ))
                }
            </div>
    )
};

export default Catalog;