import React, {Component} from 'react';
import PurchaseProductDetail from './PurchaseProductDetail';

class PurchaseProductListings extends Component{
  constructor(props){
    super(props)
    this.state={
      currentUser:{},
    }
    
  }

//   componentDidMount=()=>{
    
//     var userID = localStorage.getItem('userID')
    
//     api.getUser(userID).then(res =>{
//       var currentUser = res.data
//       this.setState({currentUser})
      
//   })
// }

  render(){
    var products = this.props.user.purchases;
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
            return <PurchaseProductDetail {...props} currentUser={this.props.user}/>
         
            
          })
        }
        
      </div>

    ):null;
  }


}

export default PurchaseProductListings;
