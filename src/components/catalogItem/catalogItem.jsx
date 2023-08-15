import React, {useEffect, useMemo, useState} from 'react';
import ReactModal from 'react-modal'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import AddToCartButton from "../AddToCartButton";
import './catalogItem.css'
import {useTheme} from "../ThemeProvider";


const CatalogItem = React.memo(({product}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const {theme} = useTheme()

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
                <AddToCartButton  product={product}/>

                {/*{selectedProduct &&*/}
                {/*    <div className="cart-counter">{selectedProduct.quantity}</div> }*/}

            </div>
            {isModalOpen &&
                <ReactModal className={'modal'} isOpen={isModalOpen} onRequestClose={closeModal} overlayClassName="modal-overlay"
                            shouldCloseOnOverlayClick={true}>
                        <Swiper className={'slider'}>
                            {product.images && product.images.map((image, index) => (
                                <SwiperSlide key={index} className={'slider__item'}>
                                    <img src={image} alt=""/>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    <AddToCartButton className='catalog__item-button' product={product}/>
                </ReactModal>
            }

        </>

    );
})

export default CatalogItem;