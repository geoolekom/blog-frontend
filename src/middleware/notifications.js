/**
 * Created by geoolekom on 24.06.17.
 */
import { POST_FAILURE, POST_LIST_FAILURE, ADD_POST_FAILURE, EDIT_POST_FAILURE } from '../actions';
import { error } from 'react-notification-system-redux';

export const notifications = store => next => action => {
    switch (action.type) {
        case POST_FAILURE:
        case POST_LIST_FAILURE:
        case ADD_POST_FAILURE:
        case EDIT_POST_FAILURE:
            store.dispatch(error({
                title: action.payload.message,
                message: action.payload.response ? action.payload.response.detail : null,
                position: 'tr',
            }));
            break;
        default:
            break;
    }
    return next(action);
};
