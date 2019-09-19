import React, {Component} from 'react';
import RouteProductDetails from './RouteProductDetails';
import {Link, navigate} from '@reach/router';
import {api, server} from './API';
import {Card, Button,Col, ListGroup} from 'react-bootstrap';

import './App.css';

class ThankYou extends Component{
  constructor(props){
    super(props);
      this.state = {
    }
  }

  render(){

    return(
      <h1>Thanks!</h1>

   
    );
  }
}

export default ThankYou;
