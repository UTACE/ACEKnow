import React from 'react'
import NavBar from "../Misc/NavBar"
import Footer from "../HomePage/Footer"
import {Col, Container, Dropdown, DropdownButton, Nav, Row, Tab} from "react-bootstrap"

import GetVaccincatedPage from "../BacktoSchool/GetVaccincatedPage"

import "../../styles/Misc/Misc.css"

class BacktoSchoolPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: "Go Get Vaccinated"
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e){
    console.log(e)
    this.setState({selectedKey: e})
  }

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
                    <Nav.Link eventKey="Notice">Notice</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Go Get Vaccinated">Go Get Vaccinated</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Go Back to School">Go Back to School</Nav.Link>
                  </Nav.Item>
                </Nav>
                <DropdownButton variant="secondary" className="canada-menu mobile-show" alignCenter title={this.state.selectedKey}>
                  <Dropdown.Item className="can-head-menu" eventKey="Notice" onClick={(e)=> this.handleSelect(e.target.textContent)}>Notice</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="can-head-menu" eventKey="Go Get Vaccinated" onClick={(e)=> this.handleSelect(e.target.textContent)}>Go Get Vaccinated</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="can-head-menu" eventKey="Go Back to School" onClick={(e)=> this.handleSelect(e.target.textContent)}>Go Back to School</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col lg={9} md={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="Notice">
                    dd
                  </Tab.Pane>
                  <Tab.Pane eventKey="Go Get Vaccinated">
                    <GetVaccincatedPage/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Go Back to School">
                    ee
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