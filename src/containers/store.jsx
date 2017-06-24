import { createStore, compose } from 'redux';
import { middleware } from '../middleware';
import { reducers } from '../reducers';
import { Map } from 'immutable';

const enhancers = compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : null
);

const initialState = Map();
export const store = createStore(reducers, initialState, enhancers);
