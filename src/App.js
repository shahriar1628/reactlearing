import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent' ; 
import Clock from './components/ClockComponent' ; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color = "primary" >
          <div className = "container">
            <NavbarBrand href = "/"> hello world</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
        <Clock />
        </div>
    );
  }
}

export default App;
