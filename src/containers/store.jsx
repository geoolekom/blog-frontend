import { createStore, compose } from 'redux';
import { middleware } from '../middleware';
import { reducers } from '../reducers';

const enhancers = compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : null
);

const defaultStore = {};
export const store = createStore(reducers, defaultStore, enhancers);
