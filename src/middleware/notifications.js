/**
 * Created by geoolekom on 24.06.17.
 */
import { POST_FAILURE, POST_LIST_FAILURE } from '../actions';
import { error } from 'react-notification-system-redux';

export const notifications = store => next => action => {
    switch (action.type) {
        case POST_FAILURE:
        case POST_LIST_FAILURE:
            store.dispatch(error({
                title: action.payload.status,
                message: action.payload.message,
                position: 'tr',
                autoDismiss: 0,
            }))
    }
    return next(action);
};
