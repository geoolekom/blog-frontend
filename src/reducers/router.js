/**
 * Created by geoolekom on 24.06.17.
 */
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const defaultState = fromJS({
    location: null
});

export const router = (state = defaultState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.set('location', fromJS(action.payload));
    } else {
        return state;
    }
};
