import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import {Route} from 'react-router-dom';

import './Shoppage.scss';

const Shoppage = ({match}) =>{
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );

}

export default Shoppage;