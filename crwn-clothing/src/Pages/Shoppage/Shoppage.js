import React from 'react';
import {connect} from 'react-redux';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import {Route} from 'react-router-dom';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import WithSpinner from '../../Components/WithSpinner/WithSpinner.component';

import './Shoppage.scss';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shoppage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => { //observable live feed
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // })
        collectionRef.get().then( //not live update: will get new collections when mount only
            snapshot => {
                    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                    updateCollections(collectionsMap);
                    this.setState({loading: false});
            }

        )
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shoppage);