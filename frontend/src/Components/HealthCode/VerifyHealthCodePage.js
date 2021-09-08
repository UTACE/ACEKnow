import React from 'react';
import QrReader from 'react-qr-reader'
import { Redirect } from 'react-router'

import NavBar from "./../Misc/NavBar";
import Footer from "./../HomePage/Footer";
import {Row, Col, Container, Button, DropdownButton, Dropdown, Alert} from "react-bootstrap";
import { CheckCircle, ExclamationCircle, XCircle, QuestionCircle } from 'react-bootstrap-icons';
import "../../styles/VerifyHealthCodePage.css";

class VerifyHealthCodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanned: false,
      result: 'No result',
      healthCodeRes: {color: "U"},
      eventList: ["Orientation"],
      selected: "Choose An Event",
    }
    console.log(props.isLoggedIn)
  }

  componentDidMount() {
    var that = this
    if (this.props.isLoggedIn) {
      // this.props.requestHandler("GET", "api/getEventList/")
      //   .then(response => response.json())
      //   .then(response => {
      //     that.setState({
      //       eventList: response
      //     })
      // })
    }
  }

  handleScan = data => {
    var that = this
    if (data) {
      this.setState({
        scanned: true,
        result: data
      })

      this.props.requestHandler("GET", data)
        .then(response => response.json())
        .then(response => {
          that.setState({
            healthCodeRes: response
          })
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  scanNext = () => {
    this.setState({
      scanned: false
    })
  }

  handleSelect(e){
    console.log(e)
    this.setState({selected: e})
  }

  render() {
    if (!this.props.isLoggedIn && this.props.isLoggedInChecked) {
      return <Redirect to='/login'/>;
    } else if (!this.props.isLoggedInChecked) {
      return <p>Authenticating...</p>
    }
    let body

    if (!this.state.scanned) {


      body =
        <>
           <Row>
             <Col>
               <h4>Select Event for The Scan</h4>
             </Col>
           </Row>
           <Row>
            <Col>
             <DropdownButton id="dropdown-item-button" title={this.state.selected} variant="secondary" menuVariant="dark">
             {this.state.eventList.map((event)=>(
               <Dropdown.Item className="dropdown-eventlist" as="button" onClick={(e)=> this.handleSelect(e.target.textContent)}>{event}</Dropdown.Item>
             ))}
             </DropdownButton>
            </Col>
           </Row>
           <Row style={{marginTop: "20px"}}>
            <Col>
              <QrReader
                className="healthCodeScanner"
                delay={100}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%', maxWidth: "600px",}}
              />
            </Col>
           </Row>
        </>
    } else {
      let color, variant, message, alertVariant, detailedMessage
      if (this.state.healthCodeRes.color === "G") {
        color = "#00CC00"
        variant = <CheckCircle style={{fontSize: "64px"}}/>
        message = "Green 绿色"
        alertVariant = "success"
      } else if (this.state.healthCodeRes.color === "Y") {
        color = "#FFCC00"
        variant = <ExclamationCircle style={{fontSize: "64px"}}/>
        message = "Yellow 黄色"
        alertVariant = "warning"
      } else if (this.state.healthCodeRes.color === "R") {
        color = "#FF0000"
        variant = <XCircle style={{fontSize: "64px"}}/>
        message = "Red 红色"
        alertVariant = "danger"
      } else if (this.state.healthCodeRes.color === "U") {
        color = "#555555"
        variant = <QuestionCircle style={{fontSize: "64px"}}/>
        message = "Gray 灰色"
        alertVariant = "dark"
      }

      body =
        <div>
          <Alert variant= {alertVariant}>Identified Link: {this.state.result}</Alert>
          <div style={{color: color}}>
            <Row><Col style={{textAlign: "center"}}>{variant}</Col></Row>
            <Row><Col style={{textAlign: "center"}}><strong>{message}</strong></Col></Row>
            <Row>
              <Col style={{textAlign: "center"}}><strong>{this.state.healthCodeRes.lastName + ", " + this.state.healthCodeRes.firstName}</strong></Col>
            </Row>
            <Row className="scan-next-btns">
              <Col>
                <Button variant="secondary" className="scan-next" onClick={this.scanNext}>Register for this event, Scan next</Button>
              </Col>
              <Col>
                <Button variant="secondary" className="scan-next" onClick={this.scanNext}>Override requirement to register, Scan next</Button>
              </Col>
              <Col>
                <Button variant="secondary" className="scan-next" onClick={this.scanNext}>Do not register, Scan next</Button>
              </Col>
            </Row>
          </div>
        </div>
    }

    return (
      <div>
        <NavBar isLoggedIn={this.props.isLoggedIn} logoutHandler={this.props.logoutHandler}/>
        <Container>
          {body}
        </Container>
        <Footer/>
      </div>
    )
  }
}


// ========================================
export default VerifyHealthCodePage;