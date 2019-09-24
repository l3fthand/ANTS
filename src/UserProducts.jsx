import React, {Component} from 'react';
import Product from './Product';
import RouteProductDetails from './RouteProductDetails';
import {Router, Link, navigate} from '@reach/router';
import {api} from './API';
import {
  Card,
  Button,
} from 'react-bootstrap';


class UserProducts extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],

    }
  }

  getProducts = () => {
    var {user} = this.props
    api.getUser(user.id).then(res => {
      this.setState({products:res.data.currentListings})
    })
  }

  componentDidMount(){
    this.getProducts()
  }
  

  

  render(){
    var {user} = this.props;
    
    return user ? (
      <div className="listings">
        <h1>My Products</h1>
          <div className="listProduct"><Link to="/products/new"><Button className="AddButton" variant="primary" type="submit">List a product</Button></Link></div>
        {
          user.currentListings.map((item) => {
            var props = {
              ...item,
              key: item.id,
              refreshData: this.getProducts,
            }
            return <Product {...props}/>
          })
        }
      </div>
    ) : null
  }


}

export default UserProducts;
