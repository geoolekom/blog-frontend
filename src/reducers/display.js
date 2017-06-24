/**
 * Created by geoolekom on 22.06.17.
 */
import update from 'react-addons-update'
import { POSTS_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS, POSTS_REQUEST } from '../actions/posts';

const defaultState = {
    feed: {
        ids: [],
        isLoading: false
    }
};

export const display = (state = defaultState, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return update(
                state,
                { feed: { isLoading: { $set: true } } }
            );
        case POSTS_SUCCESS:
            return update(
                state,
                { feed: {
                    ids: { $push: action.payload.result },
                    isLoading: { $set: false }
                } }
            );
        default:
            return state;
    }
};
