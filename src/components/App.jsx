import React from 'react';
import { Route } from "react-router-dom";

import { Menu } from './Menu';
import { Feed, DetailPost } from './Feed';
import { NotificationCenter } from "./Notifications";

class App extends React.Component {
    render = () => <div>
        <NotificationCenter/>
        <Route exact path="/" component={Feed} />
        <Route path="/:id" component={DetailPost} />
    </div>;
}

export default App;
