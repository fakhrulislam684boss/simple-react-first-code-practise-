import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
class Navigation extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen :  false
        }
    }

    toogler =()=>{
        this.setState({
            isOpen: ! this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <NavbarBrand>
                            <Link to='/' className="nav-link text-white" >MD Fakhrul Islam</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toogler} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to='/' className="nav-link" >Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/about' className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/contact' className="nav-link" >Contact</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/books'className="nav-link" >Books</Link>
                                </NavItem>
                                 <NavItem>
                                    <Link to='/new-book'className="nav-link" >New Books</Link>
                                </NavItem>
                                 <NavItem>
                                    <Link to='/menu'className="nav-link" >Menu</Link>
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