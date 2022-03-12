import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist';

// import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import RootReducer from './RootReducer';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);


const persistor = persistStore(store);

export { store, persistor };