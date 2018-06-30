import React from 'react';
import {
    NavLink,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Home.js';
import Cart from './Cart.js';
import Admin from './NewAdmin.js';
import '../Css/index.css';

class ShopApp extends React.Component {
    render(){
        return(
            <div className='ShopApp'>
                <Navigation />
                <AppRout />
            </div>
        );
    }
}

const Navigation = () => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/shop-n-cart">Shop and Cart</NavLink></li>
                        <li><NavLink exact to="/new-product">Admin</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

const AppRout = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop-n-cart" component={Cart} />
        <Route exact path="/new-product" component={Admin} />
    </Switch>
);

export default ShopApp;