import { connect } from 'react-redux';
import { compose } from 'redux';

import {createStructuredSelector} from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../WithSpinner/WithSpinner.component';

import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;