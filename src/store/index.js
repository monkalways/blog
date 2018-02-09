import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => {

    const middlewares = [
        thunkMiddleware,
        routerMiddleware(history)
    ];

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store;
}