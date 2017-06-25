import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Menu } from './Menu';
import { Feed, DetailPost } from './Feed';
import { NotificationCenter } from "./Notifications";
import { NotFound } from "./Service";

class App extends React.Component {
    render = () => <div>
        <NotificationCenter/>
        <Switch>
            <Route exact path="/" component={ Feed } />
            <Route exact path="/:id([0-9]+)" component={ DetailPost } />
            <Route component={ NotFound } />
        </Switch>
    </div>;
}

export default App;
