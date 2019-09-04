import React, {Component} from 'react';
// import {Router, Link, navigate} from '@reach/router';

import './App.css';

class Product extends Component{
  constructor(props){
    super(props)
      this.state = {}
  }


  render(){
    var {name, description, price, photo} = this.props;

    return(
      
      <div className="product">
        <h2 className="name text">{name}</h2>
        <p className="description text">{description}</p>
        <p className="price text">{price}</p>
        <p className="photo text">{photo}</p>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    );
  }
}

export default Product;
