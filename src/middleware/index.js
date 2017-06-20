import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { router } from './router';

export const middleware = applyMiddleware(
    router,
    apiMiddleware
);
