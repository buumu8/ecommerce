import React from 'react';
import {withRouter} from 'react-router-dom';
// import './MenuItem.scss'

import { MenuItemContainer,BackgroundImageContainer,MenuContentContainer,
    MenuTitleContainer,MenuSubtitleContainer } from './MenuItem.styles';

const MenuItem = ({id,title,imageUrl,size,history, linkUrl, match}) => {
    // console.log(match);
    return (
    <MenuItemContainer size={size}
        onClick={()=>history.push(`${match.url}shop/${title}`)}
        >
        <BackgroundImageContainer imageUrl={imageUrl} />
        <MenuContentContainer>
            <MenuTitleContainer>{title.toUpperCase()}</MenuTitleContainer>
            <MenuSubtitleContainer>SHOP NOW</MenuSubtitleContainer>
        </MenuContentContainer>
    </MenuItemContainer>
)}
export default withRouter(MenuItem);