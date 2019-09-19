import React, {Component} from 'react';
// import {Link, navigate} from '@reach/router';
import Review from './Review';
import {Link} from '@reach/router';
import {Form,Button,ToggleButtonGroup,ToggleButton,Card,ListGroup} from 'react-bootstrap';
import {api, server} from './API';

import './App.css';

class RouteProductDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      product:null,
      currentUser:{},
    }
  }
  routeGetProduct = (id) => {
    api.getProduct(id).then(res => this.setState({product:res.data}))
  }

  componentDidMount(){
    var {id} = this.props
    //console.log(id);
    this.routeGetProduct(id)
  }
  handleReviewFormSubmit = (e) => {
    e.preventDefault();

  
    var formData = new FormData(this.reviewForm);

    var productId = this.props.id;
    var {product} = this.state 
    var data = {
      comment:formData.get('comment-input'),
      rating:formData.get('rating-input'),
      prod_id: productId,
      purchaser_id: this.props.currentUser.id,
      seller_id: product.seller_id
    }
    api.addReview(data).then(res => {
      this.reviewForm.reset()
      this.routeGetProduct(productId)
    })
  }

  handlePurchase = (e) => {
    e.preventDefault();

    var user_id = localStorage.getItem('userID')

    var data = {
      purchaser_id:user_id,
    }
    var {id} = this.props;
    api.updateProducts(id,data)
    // this.props.openModal()
  }
  // componentDidMount=()=>{
    
  //   var userID = localStorage.getItem('userID')
    
  //   api.getUser(userID).then(res =>{
  //     var currentUser = res.data
  //     this.setState({currentUser})
      
  // })
  
//}
  
  render(){
    var {product} = this.state;
    // var{currentUser} = product.purchaser_id;





    return product ? (
     

    <>


<div className="Item">
    <Card
        style={{
            width: '18rem'
        }}>
       
        <Card.Body>
            <Card.Title>{product.name}
            </Card.Title>
            <Card.Img variant="top" src={server+product.photo}/>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className="productPrice">${product.price}<Form className="purchaseForm" onSubmit={this.handlePurchase} ref={(el) => {this.form = el}} ><Button type="submit" className="purchaseButton" name="purchase" variant="outline-dark">Purchase</Button></Form></Card.Text>
        </Card.Body>
    </Card>
  </div>
  {product.review ? <Review review={product.review} refreshData={() => this.routeGetProduct(product.id)} /> : (
    <Form className="reviewForm addReview" 
          onSubmit={this.handleReviewFormSubmit} 
          ref={(el) => {this.reviewForm = el}}
    >
		<h3>Add a Review</h3>
		{/* <Form.Group controlId="formGridDescription">
			<Form.Control type="text" placeholder="Description"/>
		</Form.Group> */}
		<Form.Group controlId="formGridComment">
      <Form.Label>Comment:</Form.Label>
			<Form.Control type="text" className="form-control" name="comment-input" id="comment-input" placeholder="Enter Comment"/>
		</Form.Group>

		<Form.Group controlId="formGridRating">
    <Form.Label>Rating:</Form.Label>
		<ToggleButtonGroup type="radio" required="true" className="form-control" name="rating-input" id="rating-input">
			<ToggleButton value={1}>★</ToggleButton>
			<ToggleButton value={2}>★★</ToggleButton>
			<ToggleButton value={3}>★★★</ToggleButton>
			<ToggleButton value={4}>★★★★</ToggleButton>
			<ToggleButton value={5}>★★★★★</ToggleButton>
			</ToggleButtonGroup>
		</Form.Group>

		<Button variant="primary" type="submit">
			Add Review
		</Button>
	</Form>
  )} 


      
   </>) : null;

  }
}

export default RouteProductDetails;
