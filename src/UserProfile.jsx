import React, {Component} from 'react';
import Products from './Products';
import UserProducts from './UserProducts';
import PurchaseProductListings from './PurchaseProductListings';
import {
    Tabs,
    Tab,
    Container,
    Col,
    Image,
    Row
  } from 'react-bootstrap';
class UserProfile extends Component {

    render(){
       
        return(
            <Container>
                <Row>
                    {/* <Col xs={6} md={4} className="user-photo">
                    <Image src={require("./item1.png")} roundedCircle />
                    </Col> */}
                </Row>
               
            <Tabs defaultActiveKey="Products" id="uncontrolled-tab-example">
                <Tab eventKey="Products" title="My Listings">
                   
                    <UserProducts user={this.props.user}/>/>
                </Tab>
                <Tab eventKey="Reviews" title="Reviews">
                    
                </Tab>
                <Tab eventKey="Purchases" title="Purchases" >
                    
                    {/* <PurchaseProductListings/> */}
                </Tab>
            </Tabs>
            </Container>
        )
    }
}
export default UserProfile;