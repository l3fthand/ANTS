import React, {Component} from 'react';
// import {Router, Link, navigate} from '@reach/router';

import './App.css';

class Product extends Component{
  constructor(props){
    super(props)
      this.state = {}
  }


  render(){

    return(
      
      <div className="product">
        <h2 className="name text">{this.props.name}</h2>
        <p className="description text">{this.props.description}</p>
        <p className="price text">{this.props.price}</p>
        <p className="photo text">{this.props.photo}</p>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    );
  }
}

export default Product;
