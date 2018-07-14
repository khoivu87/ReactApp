import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    fetch("http://localhost:3001/PRODUCTS")
    .then(res => res.json())
    .then(
      (data) => this.setState({
        results: data
      })
    );
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    console.log(`Save cell ${cellName} with value ${cellValue}`);
    console.log('The whole row :');
    console.log(row);
    fetch('http://localhost:3001/PRODUCTS/' + row.id, {
      method: 'put',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row)
    })
    .then(this.notifyU);
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
