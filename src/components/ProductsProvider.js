import React, {createContext, useContext} from 'react';
export const ProductsContext = createContext();

const products = [
    {
        id: 1342346,
        name: "Футболка",
        category: "T-shirts",
        price: 29.99,
        imageUrl: "https://files.gifts.ru/reviewer/tb/13/6140.60_73_500.jpg",
        images:['images/1.png','images/2.png','images/3.png']

    },
    {
        id: 234272347,
        name: "Джинсы",
        category: "Pants",
        price: 59.99,
        imageUrl: "https://incity.ru/upload/iblock/d62/uojfr3zb5o3w738hx3cuw0izs6b13y3c.jpg",
        images:[]
    },
    {
        id: 31346,
        name: "Платье",
        category: "Dresses",
        price: 79.99,
        imageUrl: "https://cdn-images.farfetch-contents.com/20/09/00/87/20090087_50097193_300.jpg",
        images:[]
    },
    {
        id: 316430,
        name: "Куртка",
        category: "Jackets",
        price: 129.99,
        imageUrl: "https://static.housebrand.com/media/catalog/product/cache/850/a4e40ebdc3e371adff845072e1c73f37/5/3/5385I-99X-051-1_4.jpg",
        images:[]
    }
]
export const ProductsProvider = ({children}) => {

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};
export const useProducts =  () => {
    return useContext(ProductsContext)
}
