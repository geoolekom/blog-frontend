/**
 * Created by geoolekom on 22.06.17.
 */
import update from 'react-addons-update'
import { POST_LIST_SUCCESS, POST_SUCCESS, POST_REQUEST, POST_LIST_REQUEST } from '../actions';

const defaultState = {
    feed: {
        ids: [],
        isLoading: false
    },
    post: {
        isLoading: false
    }
};

export const display = (state = defaultState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return update(
                state,
                { post: { isLoading: { $set: true } } }
            );
        case POST_SUCCESS:
            return update(
                state,
                { post: { isLoading: { $set: false } } }
            );
        case POST_LIST_REQUEST:
            return update(
                state,
                { feed: { isLoading: { $set: true } } }
            );
        case POST_LIST_SUCCESS:
            return update(
                state,
                { feed: {
                    ids: { $set: action.payload.result },
                    isLoading: { $set: false }
                } }
            );
        default:
            return state;
    }
};
