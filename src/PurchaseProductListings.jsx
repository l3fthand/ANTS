import React, {Component} from 'react';
import Product from './Product';
import {Router, Link, navigate} from '@reach/router';
import {api} from './API';
import {
  Card,
  Button,
} from 'react-bootstrap';

import './App.css';


class PurchaseProductListings extends Component{
  constructor(props){
    super(props)
   
  }

  render(){
    var {user} = this.props;
    var products = user.purchases;
    console.log(products)
    return products ? (
      
      <div className="listings">
        <h1>Purchase Products</h1>
          <div className="listProduct"><Link to="/products/new"><Button className="AddButton" variant="primary" type="submit">List a product</Button></Link></div>
        {
          products.map((item) => {
            var props = {
              ...item,
              key: item.id,
            //   refreshData: this.getProducts,
            }
            return <Product {...props}/>
         
            
          })
        }
        
      </div>

    ):null;
  }


}

export default PurchaseProductListings;
