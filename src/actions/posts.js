import urljoin from 'url-join';
import { normalize } from 'normalizr';

export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

import { apiRoot, post } from '../settings';
import { CALL_API, getJSON } from 'redux-api-middleware';

export const getPosts = () => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', '/'),
        method: 'GET',
        types: [
            POST_LIST_REQUEST,
            {
                type: POST_LIST_SUCCESS,
                payload: (action, state, res) => getJSON(res).then(json => normalize(json, [ post ]))

            },
            POST_LIST_FAILURE
        ]
    }
});

export const getPost = id => ({
    [CALL_API]: {
        endpoint: urljoin(apiRoot, 'posts', id, '/'),
        method: 'GET',
        types: [
            POST_REQUEST,
            {
                type: POST_SUCCESS,
                payload: (action, state, res) => getJSON(res).then(json => normalize(json, post))

            },
            POST_FAILURE
        ]
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
