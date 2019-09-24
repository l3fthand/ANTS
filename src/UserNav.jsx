import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import {
  Accordion,Nav,Navbar,Container,Card,Image,Row,NavDropdown
} from 'react-bootstrap';
import {Router, Link, navigate, createMemorySource, createHistory} from '@reach/router';
import {api,server} from './API';
import { IoIosArrowRoundBack,IoIosClose,IoIosAdd } from "react-icons/io";

 class UserNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
        <Image className="navbar-default"src={server+this.props.currentUser.photo} thumbnail={true} />
        </DropdownToggle>
        <DropdownMenu>
          <Link onClick={this.toggle} to="/products/new"><IoIosAdd/> Sell an Item</Link>
          <Link onClick={this.toggle} to={'/users/' + this.props.currentUser.id} >User Profile</Link>
          <Link onClick={this.toggle} to="/products">My Products</Link>
          <Link onClick={this.toggle} to="/my-reviews">My Reviews</Link>
          <Link onClick={this.toggle} to="/purchases">My Purchases</Link>
              <input
            className="loginButton"
            type="button"
            value="Logout"
            onClick={this.handleLogOut}/>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default UserNav;