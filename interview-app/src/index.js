import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home.js';
import Admin from './Admin.js';
import Cart from './Cart.js';

class Main extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">My App</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/admin">Admin</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="root">
                    {/* Mount child routes */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    (
        <Router>
            <Main>
                <div>
                    <Route path="/home" component={Home} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/cart" component={Cart} />
                </div>
            </Main>
        </Router>
    )
    ,document.getElementById('root')
);