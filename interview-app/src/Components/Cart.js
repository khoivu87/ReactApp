import React from 'react';
import {Component} from 'react';

class CartView extends Component {
    render() {
        return (
            <div className="cover">
                <div className="cover-head">
                    <h1>This is cart view</h1>
                </div>
                <div className="cover-body">
                    <VisibleProduct />
                    <CartAdd />
                </div>
            </div>
        );
    }
}

class VisibleProduct extends Component {
    render() {
        return (
            <div className="cover">
                <div classname="cover-head">
                    <h5>Products</h5>
                </div>
                <div className="cover-body">
                    <VisibleSearch />
                    <VisibleTable />
                </div>    
            </div>
        );
    }
}

class VisibleSearch extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" />
                <button type="button" name="searchBtn">Search</button>
            </form>
        );
    }
}

class VisibleTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cash money gun</td>
                        <td>43.0</td>
                        <td>38</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class CartAdd extends Component {
    render() {
        return (
            <div className="cover">
                <div className="cover-head">
                    <h5>Cart</h5>
                </div>
                <div className="cover-body">
                    <CartTable />
                    <CartTotal />
                </div>
            </div>
        );
    }
}

class CartTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cash money gun</td>
                        <td>43.0</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class CartTotal extends Component {
    render() {
        return(
            <p>Total: 129</p>
        );
    }
}

export default CartView