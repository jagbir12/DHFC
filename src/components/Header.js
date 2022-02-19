import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import logo from "../images/logo.PNG"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="red" style={{position:"sticky", boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)", backgroundColor:"red"}} fixed="top">
                <Container style={{alignItems:"center"}}><div><i class="fas fa-wrench"/> Website is under construction.</div></Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary" style={{position:"sticky", boxShadow: "0px 8px 8px -6px rgba(0,0,0,.5)"}} fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>
                    <img src={logo} alt="Darwin Hearts Football Club" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/home"} ><i class="fas fa-home"/> Home</Nav.Link>
                        <NavDropdown title="About Us" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/history"}>History</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/achievements"}>Achievements</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/objectives"}>Objectives</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/special-thanks"}>Special Thanks</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/volunteers"} className='nav-links'>Volunteers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/contact-us"}>Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
