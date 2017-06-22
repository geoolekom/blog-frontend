import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux';
import { entities } from './entities';

export const reducers = combineReducers({ router, entities });
