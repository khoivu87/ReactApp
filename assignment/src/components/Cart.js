import React, { Component } from 'react';
import CartTable from '../containers/CartTable.js';
import CartItems from '../containers/CartItem.js';
import '../css/tab.css';

class Info extends Component {
    render() {
        return (        
            <table>
                {/* Visible product table */}
                <div className="left" >
                    <table> 
                        <h1>Products</h1> 
                        <CartTable/>
                    </table>
                </div>

                {/* Cart table */}
                <div className="right">    
                    <table>
                        <caption>Cart</caption> 
                        <tr>
                            <CartItems/>
                        </tr> 
                        <p>Total:</p>
                        <button>Checkout</button>
                    </table>
                </div>
            </table>
        );
    }
}

export default Info;