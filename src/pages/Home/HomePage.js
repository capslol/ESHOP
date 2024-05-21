import React from 'react';
import axios from "axios";
import {useHTTP} from "../../contexts/HTTPProvider";

const HomePage = () => {
const { getProducts } = useHTTP()
    return (
        <div>
            <button onClick={() => getProducts()}>GET PRODUCTS</button>
            <h1>Home page</h1>
            <h1>{}</h1>
        </div>
    );
};

export default HomePage;