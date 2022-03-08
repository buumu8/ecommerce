import React from 'react';

import shopData from './Shop.data';
import './Shoppage.scss';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';


class Shoppage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            collections: shopData
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps})=> {
                        return <CollectionPreview key={id} {...otherCollectionProps} />
                    })
                }
            </div>
        );
    }

}

export default Shoppage;