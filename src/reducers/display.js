/**
 * Created by geoolekom on 22.06.17.
 */
import { fromJS } from 'immutable';
import { POST_REQUEST, POST_LIST_REQUEST, ADD_POST_REQUEST } from '../actions';
import { POST_SUCCESS, POST_LIST_SUCCESS, ADD_POST_SUCCESS } from '../actions';
import { POST_FAILURE, POST_LIST_FAILURE, ADD_POST_FAILURE } from '../actions';

const defaultState = fromJS({
    feed: {
        ids: [],
        isLoading: false
    },
    post: {
        isLoading: false
    }
});

export const display = (state = defaultState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return state.setIn([ 'post', 'isLoading' ], true);
        case POST_SUCCESS:
            return state.setIn([ 'post', 'isLoading' ], false);
        case POST_LIST_REQUEST:
        case ADD_POST_REQUEST:
            return state.setIn([ 'feed', 'isLoading' ], true);
        case POST_LIST_SUCCESS:
            return state.setIn([ 'feed', 'isLoading' ], false).setIn(['feed', 'ids'], fromJS(action.payload.result));
        case ADD_POST_SUCCESS:
            return state;
        case POST_FAILURE:
            return state.setIn([ 'post', 'isLoading' ], false);
        case POST_LIST_FAILURE:
        case ADD_POST_FAILURE:
            return state.setIn([ 'feed', 'isLoading' ], false);
        default:
            return state;
    }
};
