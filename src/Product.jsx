import React, {Component} from 'react';
import RouteProductDetails from './RouteProductDetails';
import {Link, navigate} from '@reach/router';
import {api, server} from './API';

import './App.css';

class Product extends Component{
  constructor(props){
    super(props);
  }
  // routeGetProduct = (id) => {
  //   api.getProduct(id).then(res => this.setState({product:res.data}))
  // }
  deleteProduct = () => {
    var {id, refreshData} = this.props;
    api.deleteProduct(id).then(() => refreshData())
  }


  render(){
    var {name, description, price, photo, id} = this.props;

    return(
      
      <div className="product">
        <h2 className="name text"><Link to={'/detail/'+id}>{name}</Link></h2>
        <p className="description text">{description}</p>
        <p className="price text">{price}</p>
        {/* <img className="photo" src={server+photo}/> */}
        <div className="buttons">
          <Link to={'/products/'+id+'/edit'}><button className="edit">Edit</button></Link>
          <button onClick={this.deleteProduct} className="delete">Delete</button>
          
        </div>
      </div>
    );
  }
}

export default Product;
