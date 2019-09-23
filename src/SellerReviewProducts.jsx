import React, {Component} from 'react'
// import {Link, navigate} from '@reach/router'
import SoldProductDetail from './SoldProductDetail';
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
    componentDidMount=()=>{ 
        api.getUser(1568773768783).then(res =>{
          var currentUser = res.data
          this.setState({currentUser})
          
      })
      
    }
    render(){
     
        var reviews = this.state.currentUser.receivedReviews;

       
        return reviews ? (
          
          <div className="listings">
            <h1>Sold Products {reviews.length}</h1>
            {
             
              reviews.map((item) => {
                var Reviewprops = {
                  ...item,
                  key: item.id,
                //   refreshData: this.getProducts,
                }
                return <SoldProductDetail {...Reviewprops}/>
             
                
              })
            }
            
          </div>
    
        ):null;
      }
}

export default SellerReviewProducts;