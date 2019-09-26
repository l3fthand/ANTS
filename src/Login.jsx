import React, {Component} from 'react';
import {navigate} from '@reach/router'
import {api} from './API';
import TextValidator from './TextValidator';
<<<<<<< HEAD
=======
import { ValidatorForm } from 'react-form-validator-core';
>>>>>>> ValidationReact
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
    this.state = {
       
      username1:'',
      password1:'',
      username2:'',
      password2:'',
      name:'',
      email:'',
       
    }
    
  }

  handleInputChange = (e) => {
    var value = e.target.value
    var inputName = e.target.name


    var  stateData =  {}
    stateData[inputName] = value

    this.setState(stateData)
  }
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    //var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  handleSubmitForm=(e)=>{
    e.preventDefault()
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    // var form = new FormData(this.form);
    var {username2,password2,name,email} = this.state
    var data = {
        name: name,
        username: username2,
        password: password2,
        email: email,
        photo:'default.png',
        date: date,

    }
    api.addUser(data).then(res => {
        var user = res.data

        var data = {
            username: user.username,
            password: user.password,
        }

        api.authenticate(data).then(res =>{

            
            this.props.updateCurrentUser(res.data)
            localStorage.setItem('userID',user.id)
            this.props.closeModal()
        })
      })
  }
  
  handleSubmitLogin=(e)=>{
    e.preventDefault()
    // // var form = new FormData(this.loginForm);

    // console.log(this.loginForm)
    var {username1,password1} = this.state
    var data = {
        username: username1,
        password: password1,
    }
    

    // this.loginForm.reset()
    this.setState({
        username: '',
        password: '',
    })
    api.authenticate(data).then(res =>{
        var user = res.data
        this.props.updateCurrentUser(user)
    
        return user
    })
    .then(user => {
        if(user){
            localStorage.setItem('userID',user.id)
            this.props.closeModal()
        }else{
            this.setState({text:'incorrect username or password, please try again'})
        }
    })
   
  }
  

  formError=(errors)=>{
  
    console.log(errors)
   
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
              {/* <Form className="loginForm" onSubmit={this.handleSubmitLogin} ref={(el) => {this.loginForm = el}} >

                  <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" className="form-control" name="username1" id="username-input" placeholder="Username" 
                      onChange={this.handleInputChange}
                      value={this.state.username1}
                      placeholder="Enter name"
                      validators={['required', 'isEmail']}
                      errorMessages={['this field is required', 'email is not valid']}/>
                      <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" className="form-control" name="password1" id="password-input" placeholder="Password"
                      placeholder="Enter username"
                      onChange={this.handleInputChange}
                      value={this.state.password1}
                      validators={['required', 'isEmail']}
                      errorMessages={['this field is required', 'email is not valid']}
        />
                  </Form.Group>
                  <p>{this.state.text}</p>
                  <Button variant="primary" type="submit">
                      Login
                  </Button>
                  <p></p>
              </Form> */}
              <ValidatorForm className="loginForm" onError={this.formError} onSubmit={this.handleSubmitLogin} ref={(el) => {this.loginForm = el}}>
         
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <TextValidator 
                    type="text" 
                    className="form-control" 
                    name="username1" 
                    id="username1" 
                    placeholder="Enter username"
                    onChange={this.handleInputChange}
                    value={this.state.username1}
                    validators={['required','minStringLength:2','maxStringLength:7']}
                    errorMessages={['User name is required','Minimum lenghth is 2 ','Max lenghth is 7']}

                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <TextValidator 
                    type="text" 
                    className="form-control" 
                    name="password1" 
                    id="password1" 
                    placeholder="Enter Password"
                    onChange={this.handleInputChange}
                    value={this.state.password1}
                    validators={['required','minStringLength:5','maxStringLength:12']}
                    errorMessages={['Password is required','Minimum lenghth is 5 ','Max lenghth is 12']}

                    />
                </div>

         


          <button type="submit" className="btn btn-primary" variant="primary">Login</button>
        </ValidatorForm>
          </Accordion.Collapse>
      </Card>
      <Card>
          <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Register
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
              {/* <Form className="loginForm" onSubmit={this.handleSubmitForm} ref={(el) => {this.form = el}} >

              <Form.Group  controlId="formGridName">

                <Form.Control type="text" placeholder="Name" name="name"/>
                </Form.Group>
                  <Form.Row>
                    
                      <Form.Group as={Col} controlId="formGridUsername">

                          <Form.Control type="text" placeholder="Username" name="userName2"/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">

                          <Form.Control type="password" placeholder="Password" name="password2"/>
                      </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridEmail">

                      <Form.Control type="email" placeholder="Email" name="email"/>
                  </Form.Group>


                  <Button variant="primary" type="submit">
                      Register
                  </Button>
              </Form> */}
              <ValidatorForm className="loginForm" onError={this.formError} onSubmit={this.handleSubmitForm} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <TextValidator 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        id="name" 
                        placeholder="Enter username"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        validators={['required', 'isString','minStringLength:2','maxStringLength:7']}
                        errorMessages={['Name is required', 'Name is not valid','Minimum string is 2','Max lenghth is 7']}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <TextValidator 
                        type="text" 
                        className="form-control" 
                        name="username2" 
                        id="username2" 
                        placeholder="Enter username"
                        onChange={this.handleInputChange}
                        value={this.state.username2}
                        validators={['required', 'isString','minStringLength:2','maxStringLength:7']}
                        errorMessages={['name is required', 'user name is not valid','Minimum string is 2','Max lenghth is 7']}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Password</label>
                        <TextValidator 
                        type="text" 
                        className="form-control" 
                        name="password2" 
                        id="password2" 
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                        value={this.state.password2}
                        validators={['required', 'isString','minStringLength:5','maxStringLength:12']}
                        errorMessages={['Password is required', 'Password not valid','Minimum string is 5','Max lenghth is 12']}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <TextValidator 
                        type="text" 
                        className="form-control" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['Email is required', 'Email is not valid']}

                        />
                    </div>
            


            <button type="submit" className="btn btn-primary" variant="primary">Register</button>
            </ValidatorForm>
          </Accordion.Collapse>
      </Card>
  </Accordion>
    );
  }
}

export default Login;
