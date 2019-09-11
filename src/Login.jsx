import React, {Component} from 'react';
import {navigate} from '@reach/router'
import {api} from './API';
import {
  Col,
  Accordion,
  Card,
  Button,
  Form,

} from 'react-bootstrap';

class Login extends Component {

  constructor(props){
    super(props);
    
  }
  handleSubmitForm=()=>{

    var form = new FormData(this.form);
    var data = {
        name: form.get("name-input")
    }
  }
  

  render(){
    return (
      <Accordion defaultActiveKey="0">
      <Card>
          <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Login
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
              <Form className="loginForm">

                  <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" className="form-control" name="username-input" id="username-input" placeholder="Username"/>
                      <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" className="form-control" name="password-input" id="password-input" placeholder="Password"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                      Login
                  </Button>
                  <p></p>
              </Form>
          </Accordion.Collapse>
      </Card>
      <Card>
          <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Register
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
              <Form className="loginForm" onSubmit={this.handleSubmitForm} ref={(el) => {this.form = el}} >

              <Form.Group  controlId="formGridName">

                <Form.Control type="text" placeholder="Name" id="name-input"/>
                </Form.Group>
                  <Form.Row>
                    
                      <Form.Group as={Col} controlId="formGridUsername">

                          <Form.Control type="text" placeholder="Username"/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">

                          <Form.Control type="password" placeholder="Password"/>
                      </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridEmail">

                      <Form.Control type="email" placeholder="Email"/>
                  </Form.Group>


                  <Button variant="primary" type="submit">
                      Register
                  </Button>
              </Form>
          </Accordion.Collapse>
      </Card>
  </Accordion>
    );
  }
}

export default Login;
