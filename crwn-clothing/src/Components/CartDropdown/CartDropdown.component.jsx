import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartHidden, selectCartItems,selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './CartDropdown.scss';

const CartDropdown = ({cartItems,history,hidden,dispatch,count}) => {

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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    count: selectCartItemsCount,
    hidden: selectCartHidden
})

export default withRouter(connect(mapStateToProps)(CartDropdown));