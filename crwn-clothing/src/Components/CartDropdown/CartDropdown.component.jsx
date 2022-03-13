import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import { useHistory } from "react-router-dom";

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartHidden, selectCartItems,selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './CartDropdown.scss';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    const hidden = useSelector(selectCartHidden);
    const count = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    const history = useHistory();

    const checkout = () => {
        if(!count){
            alert('Your cart is empty');
            return;
        }
        history.push('/checkout');
        if(!hidden) dispatch(toggleCartHidden());
    }
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : 
                <span className='empty-message'>
                    Your cart is empty.
                </span>
            }
        </div>
        {
            !count ? null : 
        <CustomButton onClick={()=>checkout()}>
            CHECKOUT
        </CustomButton>
        }
    </div>
    );
}

export default CartDropdown;