import React from 'react';
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // removing item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__title'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>🌟</p>
                ))}   
                </div>

                <button onClick={removeFromBasket}>Remover do carrinho</button>
            </div>

            

        </div>
    )
}

export default CheckoutProduct
