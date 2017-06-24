/**
 * Created by geoolekom on 22.06.17.
 */
import { fromJS } from 'immutable';
import { POST_LIST_SUCCESS, POST_SUCCESS, POST_REQUEST, POST_LIST_REQUEST } from '../actions';

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
            return state.setIn(['post', 'isLoading'], true);
        case POST_SUCCESS:
            return state.setIn(['post', 'isLoading'], false);
        case POST_LIST_REQUEST:
            return state.setIn(['feed', 'isLoading'], true);
        case POST_LIST_SUCCESS:
            return state.setIn(['feed', 'isLoading'], false).setIn(['feed', 'ids'], fromJS(action.payload.result));
        default:
            return state;
    }
};
