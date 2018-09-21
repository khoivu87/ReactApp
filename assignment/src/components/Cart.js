import React, { Component } from 'react';
import '../css/tab.css';
import '../css/react-bootstrap-table.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getAllCartItems, addToCart } from '../actions/CartActions.js';
import { getAllProducts } from '../actions/ProductActions.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function numSort(a, b, order) {   // order is desc or asc
    if (order === 'desc') {
        return a.price - b.price;
    } else {
        return b.price - a.price;
    }
}

const options = {
    onRowClick(row, isSelected) {
        //this.onRowClick = this.onRowClick.bind(this);
        //this.forceUpdateHandler;
        //console.log(row);
        //console.log(`selected: ${isSelected}`);
        addToCart(
            {
                "name": row.name,
                "price": row.price,
                "cqty": "1"
            }
        ).catch(function (error) {
            return error;
        }
        ).then (this.notifyC);;
    }
}

const Msg = () => (
    <div>Added product to cart</div>
)


class Info extends Component {
    notifyC = () => toast(('Adding to cart'), {
        onClose: () =>  this.props.history.push("/shop-n-cart"),
      });
    constructor(props) {
        super(props);
        this.state = {
            onCart: [],
            results: [],
            open: false
        };    
        getAllProducts()
            .then(
                (data) => this.setState({
                    results: data
                })
            )
        getAllCartItems()
            .then(
                (data) => this.setState({
                    onCart: data
                })
            )
    }

    cellButton(cell, row, rowIndex) {
        return (
            <button
        onClick={() => {this.notifyC(<Msg />);}}  cell={cell} row={row} rowIndex={rowIndex} > Add </button>
        )
    }

    render() {
        const { results } = this.state;
        let { onCart } = this.state;
        let shop = results.filter(item => item.isEnabled);
        return (
            <div>
            <ToastContainer autoClose={2000}/>
            <div>
            <table>
                {/* Visible product table */}
                <div className="left" >
                    <table>
                        <h1>Products</h1>
                        <BootstrapTable data={shop} striped={true} hover={true} options={options} ref='table'>
                            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="qty" dataSort sortFunc={numSort}>Qty</TableHeaderColumn>
                            <TableHeaderColumn dataField="price" dataSort sortFunc={numSort}>Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField="button" dataFormat={this.cellButton.bind(this)}>To Cart</TableHeaderColumn>
                        </BootstrapTable>
                    </table>
                </div>

                {/* Cart table */}
                <div className="right">
                    <table>
                        <caption>Cart</caption>
                        <tr>
                            <BootstrapTable data={onCart}>
                                <TableHeaderColumn dataField="name" isKey={true}>Item</TableHeaderColumn>
                                <TableHeaderColumn dataField="price" >Price</TableHeaderColumn>
                                <TableHeaderColumn dataField="cqty" >Qty</TableHeaderColumn>
                            </BootstrapTable>
                        </tr>
                        <p>Total:</p>
                        <button>Checkout</button>
                    </table>
                </div>
            </table>
            </div>
            </div>
        );
    }
}

export default Info;