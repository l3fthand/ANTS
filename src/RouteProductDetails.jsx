import React, {Component} from 'react';
// import {Link, navigate} from '@reach/router';
import {api, server} from './API';

import './App.css';

class RouteProductDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      product:null
    }
  }
  routeGetProduct = (id) => {
    api.getProduct(id).then(res => this.setState({product:res.data}))
  }

  componentDidMount(){
    var {id} = this.props
    //console.log(id);
    this.routeGetProduct(id)
  }

  render(){
    var {product} = this.state;

    return product ? (
      
      <div className="product">
        <h2 className="name text">{product.name}</h2>
        <p className="description text">{product.description}</p>
        <p className="price text">{product.price}</p>
        <img className="photo" src={server+product.photo}/>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          
        </div>
      </div>
    ) : null;
  }
}

export default RouteProductDetails;
