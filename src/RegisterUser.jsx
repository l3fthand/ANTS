import React, {Component} from 'react';
import api from './API'
class RegisterUser extends Component {


    handleFormSubmit=()=>{
      var form = this.form
      var data={
      name: form.get('inputUserName'),
      username: form.get('')
      }
    }
    
    render(){
        return(
<form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputUserName">User Name</label>
      <input type="text" class="form-control" name="inputUserName" placeholder="User Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" name="inputPassword" placeholder="Password"/>
    </div>
  </div>
  
  <div class="form-groupcol-md-6">
    <label for="inputEmail">Email</label>
    <input type="text" class="form-control" id="inputAddress" name="inputEmail" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label for="inputName">Name</label>
    <input type="text" class="form-control" id="inputAddress2" name="inputUserName" placeholder="Name"/>
  </div>

  <button  type="submit" class="btn btn-primary">Register</button>
</form>
        )
    }
}
export default RegisterUser;