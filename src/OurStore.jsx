import React, {Component} from 'react';
import {Link, navigate} from '@reach/router';
import {Image, Col, Container, Row, Jumbotron, Card, Nav, Button, ListGroup} from 'react-bootstrap';

class OurStore extends Component{

  render(){

    return(
        <Container className="NoPad">
            <Row className="container">
                <h3>Our Store</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat orci eget enim imperdiet sollicitudin. 
                </p>
                <p>Duis elit nunc, congue sit amet porta sed, faucibus id massa. Aliquam consequat faucibus odio, vel sagittis neque dictum sed. Curabitur ut finibus eros, ac tempor sapien.
                </p>
            </Row>
      
        </Container>
    );
  }
}

export default OurStore;
