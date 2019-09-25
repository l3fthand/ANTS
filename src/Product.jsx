import React, {Component} from 'react';
import RouteProductDetails from './RouteProductDetails';
import {Link, navigate} from '@reach/router';
import {api, server} from './API';
import {Card, Container, Carousel, Button, ListGroup} from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import {MdClose} from "react-icons/md";

class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
  }
  
  openModal = () => {
    this.setState({visible: true});
  }

  closeModal = () => {
    this.setState({visible: false});
  }

  deleteProduct = () => {
    var {id, refreshData} = this.props;
    api.deleteProduct(id).then(() => refreshData())
  }

  deletePhoto = (e) => {
    var photo = e.target.dataset.name;
    var {id,photos,refreshData} = this.props;

    var data = {
      photos: photos.filter(item => item!=photo)
    }

    api.updateProduct(id, data).then(()=> refreshData());

    
    
  }

  render(){
    var {name, description, price, id, photos} = this.props;

    return(
      
      <>
      <div className="Item userItem">
      <Card>
          <Carousel interval={null}>
            {
              photos.map(photo =>
              <Carousel.Item className="productImage">
                <Card.Img variant="top" src={server+photo}/>
                <i data-name={photo} onClick={this.deletePhoto} className="fas fa-trash deleteButton"></i>
              </Carousel.Item>)
            }
          </Carousel>

          <Card.Body>
              <Card.Title><Link to={'/products/'+id}>{name}</Link><Button variant="outline-dark"></Button>
              </Card.Title>
              <Card.Text></Card.Text>


              <ListGroup variant="flush">
                  <ListGroup.Item>
                      <span className="itemDescription">{description}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <span className="itemPrice">{price}</span>
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="edit"><Link to={'/products/'+id+'/edit'} refreshData={this.refreshData}>Edit Listing</Link></ListGroup.Item>
                  <ListGroup.Item onClick={this.openModal} className="delete linkColor">Remove Listing</ListGroup.Item>

              </ListGroup>

          </Card.Body>
      </Card>
    </div>

    <Container className="modalStyle">
      <Modal
          visible={this.state.visible}
          width="90%"
          height="50%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div className="deleteModal">
              <span>
                  <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                  <MdClose/>
                  </a>
              </span>
              <h3>Are You Sure You Want To Delete This Product</h3>
              <div class="buttons">
                <Button variant="primary" onClick={() => this.closeModal()}>Cancel</Button>
                <Button variant="primary" onClick={() => this.deleteProduct()}>Delete</Button>
              </div>
          </div>
      </Modal>
    </Container>
    </>
    );
  }
}

export default Product;
