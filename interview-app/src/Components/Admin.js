import React, {Component} from 'react';
import FetchTable from '../Controller/FetchTable';
// import PostJSON from '../Controller/PostJSON.js';

class NewAdmin extends Component {
    render() {
        return (
            <div className="cover">
                <div className="cover-head">
                    <h1>Welcome to Admin view</h1>
                    <h3>Products</h3>
                </div>
                <div className="cover-body">
                    <NewSearch />
                    <NewTable />
                </div>
            </div>
        );
    }
}

class NewSearch extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" />
                <button type="button" name="filterBtn">Filter</button>
            </form>
        );
    }
}

class NewTable extends Component {
    render() {
        return (
<<<<<<< HEAD
            <tr>
                <th>Product name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Visible</th>
            </tr>
        );
    }
}

// Component to render 01 table row, param: PRODUCTS object
class TableRow extends Component {
    render() {
        const product = this.props.product;
        return (
            <form>
                <tr>
                    <td>{product.name}</td>
                    <td><input type="text" value={product.price} /></td>
                    <td><input type="number" value={product.qty} /></td>
                    <td>{product.visible}</td>
                </tr>
            </form>
        );
    }
}

// Special row to add new product
class TableAddRow extends Component {
    render() {
        return (
            <form>
                <tr>
                    <td><input type="text" placeholder="Enter product name" /></td>
                    <td><input type="text" placeholder="Enter product price" /></td>
                    <td><input type="number" placeholder="Enter quantity" /></td>
                    <td><input type="button" value="Add" /></td>
                </tr>
            </form>
=======
            <FetchTable />
>>>>>>> 43f006bfdf81f2e89f8d1e7c1eb7ae271b7ba2a1
        );
    }
}

export default NewAdmin;