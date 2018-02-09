import axios from 'axios';
import { push } from "react-router-redux";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ww123';

export const FETCH_POSTS_COMPLETED = 'FETCH_POSTS_COMPLETED';
export const FETCH_SINGLE_POST_COMPLETED = 'FETCH_SINGLE_POST_COMPLETED';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
            .then(response => response.data)
            .then(posts => dispatch(fetchPostsCompleted(posts)));
    }
};

export const fetchPostsCompleted = (posts) => ({
    type: FETCH_POSTS_COMPLETED,
    posts
});

export const saveNewPost = (post) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
            .then(response => {
                if(response.status === 201) {
                    dispatch(push('/'))
                } else {
                    throw new Error('Cannot save new post', post);
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
};

export const fetchSinglePost = (id) => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
            .then(response => response.data)
            .then(post => dispatch(fetchSinglePostCompleted(post)));
    }
};

export const fetchSinglePostCompleted = (post) => ({
    type: FETCH_SINGLE_POST_COMPLETED,
    post
});

export const deleteSinglePost = (id) => {
    return (dispatch) => {
        axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
            .then(response => {
                if(response.status === 200) {
                    dispatch(push('/'));
                } else {
                    throw new Error('Cannot delete post', id);
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
};