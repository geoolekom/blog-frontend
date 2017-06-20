import { routerMiddleware } from 'react-router-redux';
import { history } from '../containers/history';

export const router = routerMiddleware(history);
