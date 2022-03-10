import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../CartIcon/CartIcon';
import { clearCart,toggleCartHidden } from '../../redux/cart/cart.action';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import {auth} from '../../firebase/firebase.util'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Headers = ({currentUser,hidden,clearCart,toggleCartHidden}) => {

    const signOut = () => {
        auth.signOut();
        clearCart();
        if(!hidden) toggleCartHidden();
    }
    return (
        <div className='header'>
            <Link to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={()=>signOut()}>
                        SIGN OUT
                    </div> : 
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {
                hidden? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(Headers);