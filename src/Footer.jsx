import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    Col,
    Container
  } from 'react-bootstrap';
  
  import {api} from './API';
  import classnames from "classnames";




class Footer extends Component{
    constructor(props) {
        super(props);
        this.state ={
            currentUser:{},
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount(){

        window.addEventListener("scroll", this.handleScroll);

        var userLocal = localStorage.getItem('userID')
    
        if(userLocal){
            api.getUser(userLocal).then(res=>this.setState({currentUser:res.data}))
        }


    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }


    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };



    


render () {
    var user = this.state.currentUser;
    return (
        <Navbar sticky="bottom" className={classnames("footer", {
          "footer--hidden": !this.state.visible
        })}>
        <Container>

            <Col>© 2019 Threads</Col><Col className="rCol">User:<Nav.Link href="/user-profile">{user.name}</Nav.Link></Col>

        </Container>
        </Navbar>

    );
}

}
export default Footer;



