import React from 'react';
import { Menu } from './Menu';
import { Feed, DetailPost } from './Feed';
import { Route } from "react-router-dom";

class App extends React.Component {
    render = () => <div>
        <Route exact path="/" component={Feed} />
        <Route path="/:id" component={DetailPost} />
    </div>;
}

export default App;