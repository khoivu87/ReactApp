import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import Router from './router/Router';
import {LinkContainer} from 'react-router-bootstrap';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* Navigation */}
        <Navbar fluid collapseOnSelect>
          {/* Navbar Header */}  
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          {/* Navbar Collapse */} 
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to ="/shop-n-cart">
                <NavItem>Shop and Cart</NavItem>
              </LinkContainer>
              <LinkContainer to ="/products">
                <NavItem>Admin</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Router */}
        <Router/>
      </div>
    );
  }
}

export default App;
