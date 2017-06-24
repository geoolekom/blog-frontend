/**
 * Created by geoolekom on 24.06.17.
 */
import { fromJS } from 'immutable';
import { reducer } from 'react-notification-system-redux';

export const notifications = (state, action) => {
    const result = reducer(state, action);
    return fromJS(result);
};
