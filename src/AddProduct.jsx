import React, {Component} from 'react';
import {Router, Link, navigate} from '@reach/router';
import {api} from './API';

import './App.css';

class AddProduct extends Component{
  constructor(props){
    super(props)
	}

	
	
	submitForm = (e) => {

		e.preventDefault();

		// var {} = this.props;

		var form = new FormData(this.form);

		api.uploadPhoto(form).then(res => {
			var file = res.data;
			console.log(file);

			var data = {
				name: form.get('name-input'),
				description: form.get('description-input'),
				price: form.get('price-input'),
				photo: file,
			}

			api.addProduct(data).then(navigate('/products'))
		})

		
	}


  render(){

    return(
      
      <div className="add-product">
        <h2 className="name text">New Product</h2>
        <form onSubmit={this.submitForm} ref={(el) => {this.form = el}}>

	        <div className="form-group">
	          <label htmlFor="name-input">Name</label>
	          <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
	        </div>

	        <div className="form-group">
	          <label htmlFor="name-input">Description</label>
	          <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
	        </div>

          <div className="form-group">
	          <label htmlFor="name-input">Price</label>
	          <input type="text" className="form-control" name="price-input" id="price-input" placeholder="Enter price"/>
	        </div>

	        <div className="form-group">
	          <label htmlFor="name-input">Photo</label>
	          <input type="file" className="form-control" name="photo-input" id="photo-input" placeholder="Add photo"/>
	        </div>

	        <button type="submit" className="btn btn-primary">Add</button>
	    </form>
      </div>
    );
  }
}

export default AddProduct;
