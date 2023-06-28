import React from 'react';

const CatalogItem = ({product}) => {
    console.log()
    return (
        <div  className='catalog__item'>
            <img src={product.imageUrl} alt=""/>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default CatalogItem;