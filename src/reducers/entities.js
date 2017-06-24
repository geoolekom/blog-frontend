/**
 * Created by geoolekom on 22.06.17.
 */
import update from 'react-addons-update'
import { POST_LIST_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS, POST_SUCCESS } from '../actions/posts';

const defaultState = {
    posts: {}
};

export const entities = (state = defaultState, action) => {
    switch (action.type) {
        case POST_LIST_SUCCESS:
        case POST_SUCCESS:
            return update(
                state,
                { $merge: action.payload.entities }
            );
        default:
            return state;
    }
};
