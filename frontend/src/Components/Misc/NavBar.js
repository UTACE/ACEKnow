import React, {Component} from "react";
import '../../styles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

class NavBar extends Component {

    render() {
        return (
            <div className="container-fullwidth">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="/">ACEKnow</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/tocanada">返加相关</Nav.Link>
                                <NavDropdown title="回国相关">
                                    <NavDropdown.Item href="/tochina">1</NavDropdown.Item>
                                    <NavDropdown.Item href="/tochina">2</NavDropdown.Item>
                                    <NavDropdown.Item href="/tochina">3</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="加拿大疫情情况">
                                    <NavDropdown.Item href="#covid/1">1</NavDropdown.Item>
                                    <NavDropdown.Item href="#covid/2">2</NavDropdown.Item>
                                    <NavDropdown.Item href="#covid/3">3</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="航班线路">
                                    <NavDropdown.Item href="#flight/1">1</NavDropdown.Item>
                                    <NavDropdown.Item href="#flight/2">2</NavDropdown.Item>
                                    <NavDropdown.Item href="#flight/3">3</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="其他">
                                    <NavDropdown.Item href="#others/1">1</NavDropdown.Item>
                                    <NavDropdown.Item href="#others/2">2</NavDropdown.Item>
                                    <NavDropdown.Item href="#others/3">3</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav className="ml-auto">
                                <button class="ml-auto btn btn-outline-info d-flex" onClick={() => window.location.href = "/about"}>关于我们</button>
                                {' '}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;