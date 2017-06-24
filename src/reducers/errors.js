/**
 * Created by geoolekom on 24.06.17.
 */
import { fromJS } from 'immutable';
import { POST_FAILURE, POST_LIST_FAILURE } from '../actions';

const defaultState = fromJS({
    post: [],
    feed: []
});

export const errors = (state = defaultState, action) => {
    switch (action.type) {
        case POST_FAILURE:
            return state.updateIn(['post'], e => e.push(fromJS(action.payload)));
        case POST_LIST_FAILURE:
            return state.updateIn(['feed'], e => e.push(fromJS(action.payload)));
        default:
            return state;
    }
};
