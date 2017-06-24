import { combineReducers } from 'redux-immutable';
import { entities } from './entities';
import { display } from './display';
import { router } from './router';
import { notifications } from './notifications';

export const reducers = combineReducers({ router, entities, display, notifications });
