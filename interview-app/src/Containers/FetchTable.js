import React from 'react';
import {Component} from 'react';
import {getProducts} from '../Actions/GetActions.js';

class FetchJSONClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        productItems: []
      };
      
      getProducts().
        then(
          (data) => {
            this.setState({
              isLoaded: true,
              productItems: data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /* User json-server to serve the data from Products.json to localhost:3304/prods
    "$ json-server --watch Products.json --port 3304" -> to start json server
    -> Must start the command from within the folder of that Products.json file
    Still don't understand a damn thing about this componentDidMount() method
    Needs to do further reading & practice */
    /* componentDidMount() {
      fetch("http://localhost:3304/prods")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              productItems: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    } */

    handleSubmit(event) {
      event.preventDefault();
      const data = {name: event.target.proName.value,
                    price: event.target.proPrice.value,
                    qty: event.target.proQty.value
                    };
      console.log(data);

      fetch("http://localhost:3304/prods", {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
      });
    }
    
    /* Forget about those error, isLoaded variables for now
    Can be able to add data to table at least */
    render() {
      const { productItems } = this.state;
      console.log("List items: " + productItems);
      return (
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Visible</td>
              </tr>
            </thead>  
            <tbody>
              {productItems.map(item => (
                  <tr key={'productKey' + item.name}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.qty}</td>
                      <td>{item.visible}</td>
                  </tr>
              ))}
                  <tr>
                      <td><input type="text" id="proName" name="proName" placeholder="Product name" /></td>
                      <td><input type="number" id="proPrice" name="proPrice" placeholder="100" /></td>
                      <td><input type="number" id="proQty" name="proQty" placeholder="10" /></td>
                      <td><button type="submit" name="addBtn">Add</button></td>
                  </tr>
            </tbody>
          </table>    
        </form>
      );
    }
  }

export default FetchJSONClass;