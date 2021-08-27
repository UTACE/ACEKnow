import React from 'react'
import NavBar from "../Misc/NavBar"
import Footer from "../HomePage/Footer"
import {Col, Container, Dropdown, DropdownButton, Nav, Row, Tab} from "react-bootstrap"

import "../../styles/Misc/Misc.css"
import BeforeArrival from "../Canada/BeforeArrival";
import UponArrival from "../Canada/UponArrival";
import AfterArrival from "../Canada/AfterArrival";

class BacktoSchoolPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container>
          <Tab.Container id="canada-tabs2" onSelect={this.handleSelect} activeKey={this.state.selectedKey}>
            <Row className="canada-main-content">
              <Col lg={3} md={12}>
                <Nav variant="pills" className="flex-column mobile-hide" style={{marginTop: "20px"}}>
                  <Nav.Item>
                    <Nav.Link eventKey="Before Arriving Canada">Before Arriving Canada</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Upon Arriving Canada">Upon Arriving Canada</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="After Arriving Canada">After Arriving Canada</Nav.Link>
                  </Nav.Item>
                </Nav>
                <DropdownButton variant="secondary" className="canada-menu mobile-show" alignCenter title={this.state.selectedKey}>
                  <Dropdown.Item className="can-head-menu" eventKey="Before Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>Before Arriving Canada</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="can-head-menu" eventKey="Upon Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>Upon Arriving Canada</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="can-head-menu" eventKey="After Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>After Arriving Canada</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col lg={9} md={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="Before Arriving Canada">
                    <BeforeArrival selectionResult={this.state.result}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Upon Arriving Canada">
                    <UponArrival selectionResult={this.state.result}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="After Arriving Canada">
                    <AfterArrival selectionResult={this.state.result}/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        <Footer/>
      </div>
    )

  }
}

// ========================================
export default BacktoSchoolPage;