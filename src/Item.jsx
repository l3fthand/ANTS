import React, {Component} from 'react';
import {Link, navigate} from '@reach/router';
import {api, server} from './API';
import {Card, Button,Col, ListGroup} from 'react-bootstrap';

import './App.css';

class Item extends Component{
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
      


      <Col>
        <Card>
        <Link to={'/products/'+id}><Card.Img variant="top" src={server+photo}/></Link>
            <Card.Body>
                <Card.Title><Link to={'/products/'+id}>{name}</Link>
                </Card.Title>

            </Card.Body>
        </Card>
      </Col>

   
    );
  }
}

export default Item;
