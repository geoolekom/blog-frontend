import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from "./components/App";
import { store } from "./containers/store";
import { history } from "./containers/history";

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
