import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({item: {imageUrl,name,price,quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <span className='quantity'>{quantity}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;