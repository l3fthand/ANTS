import React, {Component} from 'react';
import Product from './Product';
import RouteProductDetails from './RouteProductDetails';
import {Router, Link, navigate} from '@reach/router';
import {api} from './API';

import './App.css';

class Products extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  getProducts = () => {
    api.getProducts().then(res => {
      this.setState({products: res.data})
    })
  }

  componentDidMount(){
    this.getProducts()
  }


  

  render(){
    var {products} = this.state;
    return(
      
      <div className="container">
        <h1>Products</h1>
        <Link to="/products/new"><button>Add</button></Link>
        {
          products.map((item) => {
            var props = {
              ...item,
              key: item.id,
              refreshData: this.getProducts,
            }
            return <Product {...props}/>
            
          })
        }
        
      </div>

    );
  }


}

export default Products;
