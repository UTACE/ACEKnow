import React, {Component} from "react";
import '../../styles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'

class NavBar extends Component{

    onClick(){
        window.location.href="https://www.utace.club/";
    }
    render(){
        return (
            <div className=" Navbar">
              <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                  ACEKnow
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                  <Nav>
                    <NavDropdown title="返加相关">
                      <NavDropdown.Item href="#ca/1">1</NavDropdown.Item>
                      <NavDropdown.Item href="#ca/2">2</NavDropdown.Item>
                      <NavDropdown.Item href="#ca/3">3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="回国相关">
                      <NavDropdown.Item href="#cn/1">1</NavDropdown.Item>
                      <NavDropdown.Item href="#cn/2">2</NavDropdown.Item>
                      <NavDropdown.Item href="#cn/3">3</NavDropdown.Item>
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
                    <button class="ml-auto btn btn-outline-info" onClick={this.onClick}>关于我们</button>{' '}
                </Navbar.Collapse>

              </Navbar>

            </div>
          );
    }
}
export default NavBar;