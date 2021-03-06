import ShopActionTypes from "./shop.type";

import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.util";

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionStartAsync = () => {
        return dispatch => {
            const collectionRef = firestore.collection('collections');
            dispatch(fetchCollectionStart());

            collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionSuccess(collectionsMap));
            }).catch(error => dispatch(fetchCollectionFailure(error))
            )
        }
}


