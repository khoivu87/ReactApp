import React, { Component } from 'react';
import {Route, Switch, NavLink, withRouter} from 'react-router-dom';
import Home from './Home.js';
import List from './List.js';
import Create from './Create.js';
import Update from './Update.js';
import NotFoundPage from './NotFoundPage.js';
import StarWars from '../starwarsComponents/StarWars.js';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <AppRoute />
            </div>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><NavLink exact to="/">Home</NavLink></li>
                                <li><NavLink exact to="/posts">List</NavLink></li>
                                <li><NavLink exact to="/starwars">Star Wars</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/posts" component={List} />
                    <Route exact path="/posts/create" component={withRouter(Create)} />
                    <Route exact path="/posts/update/:postId" component={withRouter(Update)} />
                    <Route exact path="/starwars" component={StarWars} />
                    <Route path="/*" component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default App;