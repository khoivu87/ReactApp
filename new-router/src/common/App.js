import React from 'react';
import './css/App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import TablePage from './TablePage.js';

import {
    NavLink,
    Switch,
    Route
} from 'react-router-dom';

const App = () => (
    <div className='app'>
        <h1>React Router Demo</h1>
        <Navigation />
        <Main />
    </div>
);

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/tablePage'>Table Page</NavLink></li>
        </ul>
    </nav>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/tablePage' component={TablePage} />
    </Switch>
);

export default App;