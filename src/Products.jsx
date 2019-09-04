import React, {Component} from 'react';
import Product from './Product';
// import {Router, Link, navigate} from '@reach/router';

import './App.css';

class Products extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          name: 'product1',
          description: 'bla',
          price: '100',
          photo: 'photo',
        },
        {
          id: 2,
          name: 'product2',
          description: 'bla',
          price: '150',
          photo: 'photo',
          },
        ]
    }
  }


  render(){
    var {products} = this.state;
    return(
      
      <div className="container">
        <h1>Products</h1>
        <button>Add</button>
        {
          products.map((item) => {
            var props = {
              ...item,
              key: item.id
            }
            return <Product {...props}/>
          })
        }
        
      </div>

    );
  }


}

export default Products;
