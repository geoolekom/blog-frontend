import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { router } from './router';
import { notifications } from './notifications';

export const middleware = applyMiddleware(
    router,
    apiMiddleware,
    notifications
);
