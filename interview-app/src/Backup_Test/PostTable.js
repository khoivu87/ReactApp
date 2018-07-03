import React from 'react';
import {Component} from 'react';

class PostTable extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = {name: event.target.proName.value,
                    price: event.target.proPrice.value,
                    qty: event.target.proQty.value
                    };

      fetch("http://localhost:3304/prods", {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
      });
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
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

export default PostTable;