import React from "react";
//import { Link } from "react-router-dom";
import { Heading, Text,Link,Table,Box} from "gestalt";
import "gestalt/dist/gestalt.css";
import './Navigation.css';
import logo from "../images/fmlogo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button ,Dropdown,DropdownButton} from 'react-bootstrap'



const Navigation = () => {
  return (
    <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="white" variant="light" expand="lg" sticky="top" >
                                <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    />{' '}
                                    </Navbar.Brand>
                                    <Navbar.Text>For minutes</Navbar.Text>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navalign" >
                                <Navbar.Text>
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <NavDropdown align="end" title="My" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/minutes">MinutesList</NavDropdown.Item>
                                        <NavDropdown.Item href="/post">Post</NavDropdown.Item>
                                        
                                    </NavDropdown>
                                    
                                    </Nav>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
    
    
  );
};

export default Navigation;