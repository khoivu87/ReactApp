import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getAllProducts } from '../actions/ProductActions.js';
import { addToCart } from '../actions/CartActions.js';

function numSort(a, b, order) {   // order is desc or asc
    if (order === 'desc') {
        return a.price - b.price;
    } else {
        return b.price - a.price;
    }
}

const options = {
    onRowClick(row, isSelected) {
        console.log(row);
        console.log(`selected: ${isSelected}`);

        addToCart(
            {
                "name":row.name, 
                "price":row.price, 
                "cqty": "1"
            }
        ).then(request => {
                this.props.history.push("/shop-n-cart");
            }
        ).catch(function(error){
                return error;
            }
        );
    }
}

export default class CartTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };

        getAllProducts()
        .then(
            (data) => this.setState(
                {
                    results: data
                }    
            )
        )
    }

    render() {
        const { results } = this.state;
        let shop = results.filter(item => item.isEnabled);

        return (
            <div>
                <BootstrapTable data={shop} striped={true} hover={true} options={options} ref='table'>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="qty" dataSort sortFunc={numSort}>Qty</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataSort sortFunc={numSort}>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

