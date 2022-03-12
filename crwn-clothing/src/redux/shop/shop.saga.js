import {takeLatest, call, put, all} from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import { fetchCollectionSuccess,fetchCollectionFailure } from '../../redux/shop/shop.action';

import ShopActionTypes from './shop.type';

export function* fetchCollectionAsync(){
    // yield console.log('I am fired');
    try{
       const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }catch (error){
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync);
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}