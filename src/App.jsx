import React, {Component} from 'react';
import axios from 'axios';
import {Router, Link, navigate} from '@reach/router';
import Products from './Products';
import AddProduct from './AddProduct';

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
        <Products path="/product"/>
        <AddProduct path="/product/new"/>
      </Router>

    );
  }
}

export default App;
