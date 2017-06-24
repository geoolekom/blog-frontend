import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux';
import { entities } from './entities';
import { display } from './display';

export const reducers = combineReducers({ router, entities, display });
