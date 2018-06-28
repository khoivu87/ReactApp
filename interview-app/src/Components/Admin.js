import React from 'react';
import {Component} from 'react';

// Product data, JSON type
const PRODUCTS = [
    {name: "Cash money gun", price: 43.0, qty: 38, visible: true},
    {name: "Giant inflatable unicorn", price: 23.5, qty: 3, visible: false},
    {name: "Deal with it sunglasses", price: 11.2, qty: 17, visible: true},
    {name: "Breaking Bad Lego set", price: 699.5, qty: 0, visible: true}
];

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
                    <TableComponent products={PRODUCTS} />
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
                <input type="button" value="Add" />
            </form>
        );
    }
}

/* Table layout includes headers (table head) and body (data rows)
Use the forEach to read data from the const PRODUCTS
Create new row for each PRODUCT's child
Parameter: child product from the PRODUCTS object key -> product name (can be other product's attribute)
*/
class TableComponent extends Component {
    render() {
        const rows = [];
        this.props.products.forEach((product) => {
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
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td>{product.visible}</td>
            </tr>
        );
    }
}

export default AdminView