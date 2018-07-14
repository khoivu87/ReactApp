import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class CartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onCart: []
        };

        fetch("http://localhost:3001/CART")
        .then(res => res.json())
        .then(
            (data) => this.setState({
                onCart: data,
        }));
    }

    render() {
        const {onCart} = this.state;
        return (
            <BootstrapTable data={onCart}>
                <TableHeaderColumn dataField="name" isKey={true}>Item</TableHeaderColumn>
                <TableHeaderColumn dataField="price" >Price</TableHeaderColumn>
                <TableHeaderColumn dataField="cqty" >Qty</TableHeaderColumn>
            </BootstrapTable>
        );
    }
} 