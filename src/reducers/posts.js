import _ from 'lodash';

import { FETCH_POSTS_COMPLETED, FETCH_SINGLE_POST_COMPLETED } from '../actions';

const defaultPostsState = {};

const postsReducer = (state = defaultPostsState, action) => {
    switch (action.type) {
        case FETCH_POSTS_COMPLETED:
            return _.mapKeys(action.posts, 'id');
        case FETCH_SINGLE_POST_COMPLETED:
            return {
                ...state,
                [action.post.id]: action.post
            };
        default:
            return state;
    }
};

export default postsReducer;