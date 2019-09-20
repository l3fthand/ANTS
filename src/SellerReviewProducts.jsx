import React, {Component} from 'react'
// import {Link, navigate} from '@reach/router'
import {Form, Button, ListGroup,ToggleButton} from 'react-bootstrap';
import {api} from './API';

class SellerReviewProducts extends Component {
    constructor(props){
        super(props)
        {
            this.state = {
                currentUser:{},
            }
        }
    }

    handleTrashClick = (e) => {
        var {
            refreshData
        } = this.props

        var reviewId = e
            .target
            .dataset
            .reviewid
            api
            .deleteReview(reviewId)
            .then(res => refreshData())
    }
    componentDidMount=()=>{
    
        // var userID = localStorage.getItem('userID')
        
        api.getUser(1568773768783).then(res =>{
          var currentUser = res.data
          this.setState({currentUser})
          
      })
      
    }
    render(){
        var products = this.state.currentUser.products;
        
        return products ? (
          
          <div className="listings">
            <h1>Purchase Products</h1>
              {/* <div className="listProduct"><Link to="/products/new"><Button className="AddButton" variant="primary" type="submit">List a product</Button></Link></div> */}
            {
              products.map((item) => {
                var props = {
                  ...item,
                  key: item.id,
                //   refreshData: this.getProducts,
                }
                // return <PurchaseProductDetail {...props} currentUser={this.props.currentUser}/>
             
                
              })
            }
            
          </div>
    
        ):null;
      }
}

export default SellerReviewProducts;