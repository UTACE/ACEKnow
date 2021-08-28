import React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap'

import '../../styles/NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className="container-fullwidth">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src="/static/logo_268.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                              />
                            &nbsp;&nbsp;ACEKnow
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/tocanada">返加相关</Nav.Link>
                                <Nav.Link href="/backtoschool">返校相关</Nav.Link>
                                <Nav.Link href="/virusmap">加拿大疫情情况</Nav.Link>
                                <Nav.Link href="/healthCode/-">ACE健康码</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <button className="ml-auto btn btn-outline-info d-flex" onClick={() => window.location.href = "/about"}>关于我们</button>
                                {' '}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;