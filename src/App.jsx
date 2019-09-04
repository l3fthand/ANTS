import React, {Component} from 'react';
import axios from 'axios'
import {Router, Link, navigate} from '@reach/router'


import './App.css';
import api from './API'
import RegisterUser from './RegisterUser';




class App extends Component{
  constructor(props){
  super(props)
    this.state ={
      currentUser:{},
    }
  }
handleLogOut=()=>{

}
componentDidMount=()=>{

}
  render(){
    return(
      
      <Router>
        <RegisterUser path="/users/create"/>
      </Router>
    )
  }
}

export default App;
