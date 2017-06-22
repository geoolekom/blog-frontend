import React from 'react';
import { Menu } from './Menu';
import { Feed } from './Feed';

class App extends React.Component {
    render = () => <div>
        <Menu/>
        <Feed/>
    </div>;
}

export default App;