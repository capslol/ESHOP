import React, {useContext, useState} from 'react';
import ReactModal from 'react-modal'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {CartContext} from "../cartContext";


const CatalogItem = ({product, onAddToCart}) => {


    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    return (

        <div key={product.id}>
            <div  className='catalog__item'>
                <img onClick={openModal} src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => onAddToCart(product)} type="submit">Add to cart</button>
            </div>
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="modal-overlay"
                        shouldCloseOnOverlayClick={true}>
                <div className="modal">
                    <Swiper>
                        {product.images && product.images.map((image) => (
                            <SwiperSlide className={'slider__item'}>
                                <img src={image} alt=""/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button type="submit">Add to cart</button>
                </div>
            </ReactModal>

        </div>

    );
};

export default CatalogItem;