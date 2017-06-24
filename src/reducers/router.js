/**
 * Created by geoolekom on 24.06.17.
 */
import { fromJS } from 'immutable';
import { routerReducer } from 'react-router-redux';

export const router = (state, action) => {
    const { location } = routerReducer(state, action);
    return fromJS({ location });
};
