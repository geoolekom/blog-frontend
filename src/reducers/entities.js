/**
 * Created by geoolekom on 22.06.17.
 */
import update from 'react-addons-update'
import { POSTS_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS } from '../actions/posts';

const defaultState = {
    posts: {}
};

export const entities = (state = defaultState, action) => {
    switch (action.type) {
        case POSTS_SUCCESS:
            return update(
                state,
                { $merge: action.payload.entities }
            );
        default:
            return state;
    }
};
