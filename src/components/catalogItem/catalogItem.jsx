import React, { useState} from 'react';
import ReactModal from 'react-modal'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useCart} from "../cartContext";

const CatalogItem = React.memo(({ product }) => {
    const {cartItems, addToCart} = useCart()

    const [isOpen, setIsOpen] = useState(false)

    const openModal =  () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    const selectedProduct = cartItems.find(item => item.id === product.id)
    console.log('render catalog item')
    return (

        <>
            <div  className={`catalog__item ${cartItems.some(item => item.id === product.id) ? 'catalog__item--active' : '' }`}>
                <img onClick={openModal} src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)} type="submit">Add to cart</button>
                {selectedProduct &&
                    <div className="cart-counter">{selectedProduct.quantity}</div> }

            </div>
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="modal-overlay"
                        shouldCloseOnOverlayClick={true}>
                <div className="modal">
                    <Swiper>
                        {product.images && product.images.map((image, index) => (
                            <SwiperSlide key={index} className={'slider__item'}>
                                <img src={image} alt=""/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button type="submit">Add to cart</button>
                </div>
            </ReactModal>

        </>

    );
})

export default CatalogItem;