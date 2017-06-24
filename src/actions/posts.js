import urljoin from 'url-join';
import { normalize } from 'normalizr';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

import { apiRoot, post } from '../settings';
import { CALL_API } from 'redux-api-middleware';

export const getPosts = () => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', '/'),
        method: 'GET',
        types: [
            POSTS_REQUEST,
            {
                type: POSTS_SUCCESS,
                payload: (action, state, res) => res.json().then(json => normalize(json, [ post ]))

            },
            POSTS_FAILURE
        ]
    }
});

export const getPost = id => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', id, '/'),
        method: 'GET',
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE]
    }
});

export const addPost = (title, content) => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', '/'),
        method: 'POST',
        types: [ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE],
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    }
});

export const editPost = (id, title, content) => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', id, '/'),
        method: 'PUT',
        types: [EDIT_POST_REQUEST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE],
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    }
});
