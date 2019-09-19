import React, {Component} from 'react';
import RouteProductDetails from './RouteProductDetails';
import {Link, navigate} from '@reach/router';
import {api, server} from './API';
import {Card, Button, ListGroup,Media} from 'react-bootstrap';

import './App.css';

class PurchaseProductDetail extends Component {
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
    var {name, description, price, photo, id,currentUser} = this.props;

    return(
      

      <div className="Item userItem">
      <ul className="list-unstyled">
        <Media as="li" className="line">
            <img
            width={64}
            height={64}
            className="mr-3"
            src={server+photo}
            alt="product"
            />
            <Media.Body className="mr-3">
            <h5><Link to={'/products/'+id}>{name}</Link></h5>
            <p className="price">${price}</p>
            </Media.Body>
            <Button variant="primary" type="submit">
            <Link to={'/products/'+id}>   Review </Link></Button>
            
            {/* 
            <p><Link to={'/products/'+id}>View</Link></p>
            */}
        </Media>
        </ul>
    </div>
    );
  }
}

export default PurchaseProductDetail;
