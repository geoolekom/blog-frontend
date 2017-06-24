import { combineReducers } from 'redux-immutable';
import { entities } from './entities';
import { display } from './display';
import { router } from './router';
import { reducer as notifications } from 'react-notification-system-redux';

export const reducers = combineReducers({ router, entities, display, notifications });
