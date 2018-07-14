import React from 'react';
import {withRouter} from 'react-router-dom';
import Allproducts from '../containers/Table.js';
import { ToastContainer, toast } from 'react-toastify';
import { createNewProduct } from '../actions/ProductActions.js';
import 'react-toastify/dist/ReactToastify.css';

class FilterableProductTable extends React.Component {
  notifyA = () => toast(('This products has been added'), {
    onOpen: () =>  this.setState({open: true}),
    onClose: () =>  this.setState({open: false}),
  });

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { open: false}
  }
  
  handleSubmit(event){ 
    event.preventDefault();

    createNewProduct(
      {
        "isEnabled": true,
        "name": this.name.value,
        "qty": "0",
        "price": "0"
      }
    ).then(request => {
        this.props.history.push("/products");
      }
    ).then(this.notifyA)
    .catch(function(error) {
        return error;
      }
    );
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div className = "cross">
          <h1>Products</h1>
          <Allproducts/>
          <form onSubmit={withRouter(this.handleSubmit)}>
            <input ref={(ref) => {this.name = ref}} placeholder= "Name" type="text" name="name"/><br />
            <button type="Submit">Add</button> 
          </form> 
        </div>
      </div>
    );
  }
}
  
export default FilterableProductTable;
