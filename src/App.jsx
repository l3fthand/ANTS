import React, {Component} from 'react';
import axios from 'axios';
import {Router, Link, navigate} from '@reach/router';
import Products from './Products';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Product from './Product';
import RouteProductDetails from './RouteProductDetails';

import './App.css';
import api from './API'


class App extends Component{
  constructor(props){
  super(props)
    this.state = {
      currentUser:{},
    }
  }

handleLogOut=()=>{

}
componentDidMount=()=>{

}
  render(){
    return(
      
      <Router>
        <Products path="/products"/>
        <AddProduct path="/products/new"/>
        <EditProduct path="/products/:id/edit"/>
        {/* <RouteProductDetails path="/detail/:id"/> */}
        <RouteProductDetails path="/products/:id"/>
      </Router>

    );
  }
}

export default App;
