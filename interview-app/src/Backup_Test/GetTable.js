import React from 'react';
import {Component} from 'react';

class GetTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        productItems: [],
        refreshing: true
      };
      // Best place to set initial state is the constructor, so fetch data here
      fetch("http://localhost:3304/prods")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            productItems: result
          });
        },
        // Error handling
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    }
    
    /* Forget about those error, isLoaded variables for now
    Can be able to add data to table at least */
    render() {
      const { productItems } = this.state;
      console.log("List items: " + productItems);
      return (
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
          </tbody>
        </table>    
      );
    }
}

export default GetTable;