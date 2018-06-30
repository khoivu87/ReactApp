import React from 'react';
import {Component} from 'react';
import ProductList from '../Data/Products.json';

// Product data, import from Products.json file
const PRODUCTS = ProductList; 

// Base layout of Admin view page
class AdminView extends Component {
    render() {
        return (
            <div className="cover">
                <div className="cover-head">
                    <h1>Welcome to Admin view</h1>
                    <h3>Products</h3>
                </div>
                <div className="cover-body">
                    <SearchComponent />
                    <TableComponent itemList={PRODUCTS} />
                </div>
            </div>
        );
    }
}

// Search bar on the product table
class SearchComponent extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" />
                <input type="button" value="Filter" />
            </form>
        );
    }
}

/* Table layout includes headers (table head) and body (data rows)
Use the forEach() loop to read data from the const PRODUCTS
Create new row for each PRODUCT's child found -> push() method
Parameter: child product from the PRODUCTS object key -> product name (can be other product's attribute)
*/
class TableComponent extends Component {
    render() {
        const rows = [];
        this.props.itemList.prods.forEach((product) => {
            rows.push(
                <TableRow product={product}
                key={product.name} />
            )
        });
        return (
            <table>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    {rows}
                    <TableAddRow />
                </tbody>
            </table>
        );
    }
}

// Stupid simple component to render the table header
class TableHead extends Component {
    render() {
        return (
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

// Speial row to add new product
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
        );
    }
}

export default AdminView