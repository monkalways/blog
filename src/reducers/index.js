import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import postsReducer from './posts';

const rootReducer = combineReducers({
    routing: routerReducer,
    posts: postsReducer,
    form: formReducer
});

export default rootReducer;