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
      healthID: '',
      healthCodeRes: {color: "U"},

      eventListFetched: false,
      eventList: [],
      selected: "Choose An Event",
      selectedIdx: -1,
    }
  }

  fetchEventList() {
    let that = this

    if (this.props.isLoggedIn) {
      this.props.requestHandler("GET", "api/getEventList/")
        .then(response => response.json())
        .then(response => {
          that.setState({
            eventListFetched: true,
            eventList: response
          })
      })
    }
  }

  handleScan = data => {
    var that = this
    if (data) {
      this.setState({
        scanned: true,
        result: data,
        healthID: data.substring("api/verifyHealthQRCode/".length, data.length - 1)
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

  scanNext = (isRegister, isOverride, healthCodeColor) => {
    let that = this
    this.setState({
      scanned: false
    })

    if (isRegister) {
      this.props.requestHandler("POST", "api/logScanRecord/", {
        "eventPk": this.state.eventList[this.state.selectedIdx].pk,
        "healthID": this.state.healthID,
        "isOverride": isOverride,
        "healthCodeColor": healthCodeColor
      })
        .then(response => response.json())
        .then(response => {
          that.setState({
            healthCodeRes: response
          })
        })
    }
  }

  handleSelect(idx){
    this.setState({
      selected: this.state.eventList[idx].name,
      selectedIdx: idx,
      eventListFetched: true,
    })
  }

  render() {
    if (!this.props.isLoggedIn && this.props.isLoggedInChecked) {
      return <Redirect to='/login'/>;
    } else if (!this.props.isLoggedInChecked) {
      return <p>Authenticating...</p>
    }

    if (!this.state.eventListFetched) {this.fetchEventList()}


    let body

    if (!this.state.scanned) {
      let qrCode

      if (this.state.selectedIdx !== -1) {
        qrCode = <Row style={{marginTop: "20px"}}>
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
      }

      body =
        <>
           <Row>
             <Col>
               <h4>Select Event for The Scan</h4>
             </Col>
           </Row>
           <Row>
            <Col>
             <DropdownButton id="dropdown-item-button" title={this.state.selected} variant="secondary">
             {this.state.eventList.map((event, idx)=>(
               <Dropdown.Item className="dropdown-eventlist" as="button"
                              onClick={()=> this.handleSelect(idx)} key={"eventDropdown_" + idx}>
                 {event.name}
               </Dropdown.Item>
             ))}
             </DropdownButton>
            </Col>
           </Row>
          {qrCode}
        </>
    } else {
      let color, variant, message, alertVariant
      let actionButton = []
      if (this.state.healthCodeRes.color === "G") {
        color = "#00CC00"
        variant = <CheckCircle style={{fontSize: "64px"}}/>
        message = "Green 绿色"
        alertVariant = "success"
        actionButton.push(
          <Col key={"green_default"}>
            <Button variant="success" className="scan-next" onClick={()=> this.scanNext(true, false, 'G')}>Register for this event, Scan next</Button>
          </Col>
        )
        actionButton.push(
          <Col key={"green_skip"}>
            <Button variant="secondary" className="scan-next" onClick={()=> this.scanNext(false, false, 'G')}>Skip for this event, Scan next</Button>
          </Col>
        )
      } else if (this.state.healthCodeRes.color === "Y") {
        color = "#FFCC00"
        variant = <ExclamationCircle style={{fontSize: "64px"}}/>
        message = "Yellow 黄色"
        alertVariant = "warning"
        actionButton.push(
          <Col key={"yellow_default"}>
            <Button variant="primary" className="scan-next" onClick={()=> this.scanNext(false, false, 'Y')}>Do NOT register, Scan next</Button>
          </Col>
        )
        actionButton.push(
          <Col key={"yellow_override"}>
            <Button variant="warning" className="scan-next" onClick={()=> this.scanNext(true, true, 'Y')}>Override requirement to register, Scan next</Button>
          </Col>
        )
      } else if (this.state.healthCodeRes.color === "R") {
        color = "#FF0000"
        variant = <XCircle style={{fontSize: "64px"}}/>
        message = "Red 红色"
        alertVariant = "danger"
        actionButton.push(
          <Col key={"red_default"}>
            <Button variant="primary" className="scan-next" onClick={()=> this.scanNext(false, false, 'R')}>Do NOT register, Scan next</Button>
          </Col>
        )
        actionButton.push(
          <Col key={"red_override"}>
            <Button variant="danger" className="scan-next" onClick={()=> this.scanNext(true, true, 'R')}>Override requirement to register, Scan next</Button>
          </Col>
        )
      } else if (this.state.healthCodeRes.color === "U") {
        color = "#555555"
        variant = <QuestionCircle style={{fontSize: "64px"}}/>
        message = "Gray 灰色"
        alertVariant = "dark"
        actionButton.push(
          <Col id={"gray_default"}>
            <Button variant="primary" className="scan-next" onClick={()=> this.scanNext(false, false, 'U')}>Something is wrong, Scan next</Button>
          </Col>
        )
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
            <Row className="scan-next-btns" style={{marginTop: "20px"}}>
              {actionButton}
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