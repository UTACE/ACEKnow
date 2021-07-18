import React, {Component} from "react";
import '../../styles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'

class NavBar extends Component{

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
                    <Nav.Link href="#1" class = "nav-links">返加相关</Nav.Link>
                    <Nav.Link href="#2" class = "nav-links">回国相关</Nav.Link>
                    <Nav.Link href="#3" class = "nav-links">加拿大疫情情况</Nav.Link>
                    <Nav.Link href="#4" class = "nav-links">航班线路</Nav.Link>
                    <Nav.Link href="#5" class = "nav-links">其他</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
    }
}
export default NavBar;