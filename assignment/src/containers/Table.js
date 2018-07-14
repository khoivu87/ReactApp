import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllProducts, updateProductById } from '../actions/ProductActions.js';
const options = {
  clearSearch: true
};

function numSort(a, b, order) {   // order is desc or asc
  if (order === 'desc') {
    return a.price - b.price;
  } else {
    return b.price - a.price;
  }
}

export default class Allproducts extends React.Component {
  notifyU = () => toast(('This products has been modified'), {
    onOpen: () =>  this.setState({open: true}),
    onClose: () =>  this.setState({open: false}),
  });

  constructor(props) {
    super(props);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    this.state = {
      results: [],
      open: false
    };

    // Initial values must be in the constructor
    getAllProducts()
    .then(
      (data) => this.setState(
        {
          results: data
        }
      )
    ).catch(function(error) {
        return error;
      }
    );
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    console.log(`Save cell ${cellName} with value ${cellValue}`);
    console.log('The whole row :');
    console.log(row);

    updateProductById(row.id, row)
    .then(this.notifyU)
    .catch(function(error) {
        return error;
      }
    );
  }

  render() {
    const { results } = this.state;
    const cellEditProp = {
      mode: 'click',
      ChangeToSave: true,
      afterSaveCell: this.onAfterSaveCell
    };

    return (
      <div><ToastContainer />
        <div>
            <BootstrapTable
            data={results}
            search={true}
            cellEdit={cellEditProp}
            options={options}
            striped={true}
            hover={true}>
              <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>
                Product ID
              </TableHeaderColumn>

              <TableHeaderColumn dataField="name" dataSort={true}>
                Product Name
              </TableHeaderColumn>

              <TableHeaderColumn dataField="qty" dataSort sortFunc={numSort}>
                Qty
              </TableHeaderColumn>

              <TableHeaderColumn dataField="price" dataSort sortFunc={numSort}>
                Product Price
              </TableHeaderColumn>

              <TableHeaderColumn dataField="isEnabled"
                editable={{ type: 'checkbox', options: { values: 'true:false' } }}>
                Edit
              </TableHeaderColumn>
            </BootstrapTable>
        </div>
      </div>
    );
  }
}
