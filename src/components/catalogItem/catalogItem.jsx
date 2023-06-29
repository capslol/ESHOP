import React, {useState} from 'react';
import ReactModal from 'react-modal'




const CatalogItem = ({product}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div className='catalog__item' onClick={openModal}>
                <img src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button type="submit">Add to cart</button>
            </div>
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="modal-overlay" shouldCloseOnOverlayClick={true}>
                <div className="modal">
                    <img src={product.imageUrl} alt=""/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button type="submit">Add to cart</button>
                </div>
            </ReactModal>

        </>

    );
};

export default CatalogItem;