import React from 'react';
import {Component} from 'react';

class FetchJSONClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        productItems: []
      };
    }
  
    /* User json-server to serve the data from Products.json to localhost:3304/prods
    "$ json-server --watch Products.json --port 3304" -> to start json server
    -> Must start the command from within the folder of that Products.json file
    Still don't understand a damn thing about this componentDidMount() method
    Needs to do further reading & practice */
    componentDidMount() {
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
    }
  
    /* Forget about those error, isLoaded variables for now
    Can be able to add data to table at least */
    render() {
      const { productItems } = this.state;
      console.log("List items: " + productItems);
      return (
        <tbody>
            {productItems.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.visible}</td>
                </tr>
            ))}
        </tbody>
      );
    }
  }

export default FetchJSONClass;