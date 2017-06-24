/**
 * Created by geoolekom on 22.06.17.
 */
import { fromJS } from 'immutable';
import { POST_LIST_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS, POST_SUCCESS } from '../actions/posts';

const defaultState = fromJS({
    posts: {}
});

export const entities = (state = defaultState, action) => {
    switch (action.type) {
        case POST_LIST_SUCCESS:
        case POST_SUCCESS:
            return state.mergeDeep(action.payload.entities);
        default:
            return state;
    }
};
