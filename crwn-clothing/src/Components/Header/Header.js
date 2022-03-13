import React from 'react';
// import './Header.scss';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './Header.styles'
// import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import CartIcon from '../CartIcon/CartIcon';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import CartDropdown from '../CartDropdown/CartDropdown.component';
// import {auth} from '../../firebase/firebase.util'
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {signOutStart} from '../../redux/user/user.action';

const Headers = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutStart());
        if(!hidden) dispatch(toggleCartHidden());
    }
    
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={signOut}>
                        SIGN OUT
                    </OptionLink> : 
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

export default Headers;