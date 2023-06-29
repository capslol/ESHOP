import React, {useState} from 'react';
import ReactModal from 'react-modal'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


const CatalogItem = ({product}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    console.log(product.images[0])
    return (

        <>
            <div className='catalog__item'>
                <img onClick={openModal} src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button type="submit">Add to cart</button>
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

        </>

    );
};

export default CatalogItem;