import React, {useEffect, useMemo, useState} from 'react';
import ReactModal from 'react-modal'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import CartItemsCounter from "../CartItemsCounter";
import AddToCartButton from "../AddToCartButton";


const CatalogItem = React.memo(({product}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        console.log(isModalOpen)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        console.log('render catalog item')
    })


    return (

        <>
            <div className='catalog__item'>
                <img onClick={openModal} src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <AddToCartButton product={product}/>
                <CartItemsCounter productId={product.id}/>

                {/*{selectedProduct &&*/}
                {/*    <div className="cart-counter">{selectedProduct.quantity}</div> }*/}

            </div>
            {isModalOpen &&
                <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} overlayClassName="modal-overlay"
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
            }

        </>

    );
})

export default CatalogItem;