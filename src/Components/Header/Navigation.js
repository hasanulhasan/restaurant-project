import { GoogleAuthProvider } from 'firebase/auth';
import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    }
  }

  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar dark color='dark' expand='sm'>
          <div className='container'>
            <NavbarToggler onClick={this.navToggle}></NavbarToggler>
            <NavbarBrand href='/home'>
              Restaurant app
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='mr-auto'>
                <NavItem>
                  <Link to='/home' className='nav-link active'>Home</Link>
                </NavItem>
                <NavItem>
                  <Link to='/' className='nav-link'>Menu</Link>
                </NavItem>
                <NavItem>
                  <Link to='/about' className='nav-link'>About</Link>
                </NavItem>
                <NavItem>
                  <Link to='/contact' className='nav-link'>Contact</Link>
                </NavItem>
                <NavItem>
                  <Link to='/login' className='nav-link' >Login</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;