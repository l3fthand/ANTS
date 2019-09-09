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
    var {name, description, price, photo} = this.props;

    return(
      
      <div className="product">
        <h2 className="name text">{name}</h2>
        <p className="description text">{description}</p>
        <p className="price text">{price}</p>
        <img className="photo" src={server+photo}/>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          
        </div>
      </div>
    );
  }
}

export default RouteProductDetails;
