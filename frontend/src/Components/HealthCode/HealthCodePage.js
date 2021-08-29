import React from 'react';
import NavBar from "./../Misc/NavBar";
import Footer from "./../HomePage/Footer";
import MsgBox from "../Misc/MsgBox";
import {Row, Col, Card, Container, Spinner} from "react-bootstrap";
import {mainDomain} from "../../configuration"

import ACEQR from "../../ACE-QR.jpg";
import ACEKnowlogo from "../../logo_268.png"
import '../../styles/AboutPage.css';

import { QRCode } from 'react-qrcode-logo';


class HealthCodePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      healthID: this.props.match.params.healthID,
      date: new Date(),
      healthCodeStatus: {},
      msg: 'Health Code Expired in 1800 seconds'
    }
  }

  verifyHealthCode() {
    const currentDate = new Date()
    const diff = (currentDate.getTime() - this.state.date.getTime()) / 1000
    if (diff > 1800) {
      this.setState({
        healthCodeStatus: 'U',
        msg: 'Health Code Expired, Please Refresh'
      })
    } else {
      this.setState({
        msg: 'Health Code Expired in ' + parseInt(1800 - diff) + ' seconds'
      })
    }
  }

  componentDidMount() {
    if (this.state.healthID === "-") {return}

    fetch(mainDomain + 'api/getHealthQRCode/' + this.state.healthID + '/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {return response.json()})
      .then(response => {
        this.setState({
          healthCodeStatus: response
        })
    })

    this.timer = setInterval(()=> this.verifyHealthCode(), 1000);
  }

  render() {
    if (this.state.healthID === "-") {
      return (
        <div>
          <NavBar/>
          <MsgBox variant={"warning"} content={"Please contact ACE official wechat to get a health code."}/>
          <Container>
            <h4>Get a Health Code</h4>
            <p>
              In order to get a health code, please send your essential information to ACE official wechat.
              We will process and verify all your documents within 48 hours. The ACE staff will then send you
              a unique link to your health code. Please make sure not to disclose the unique link. Failed to do
              so may ban you from participating any ACE organized activities.
            </p>
            <h4>Documents You Need To Provide</h4>
            <p>
              <li>Vaccination Proof (Either Chinese or English version is accepted)</li>
              <li>Photo that You Hold a Government Issued ID</li>
              <li>Your Residence Postal Code</li>
              <li>Your WeChat ID</li>
              <li>Your Phone Number</li>
              <li>Your Flight Ticket (If available)</li>
            </p>
            <h4>Privacy Concern Note</h4>
            <p>
              All your documents are for verification only. We will not share any of them mentioned in the list above
              with any third parties. We may keep your <strong>WeChat ID and Phone Number</strong> in order to notify
              any possible COVID exposure. We will <strong>delete</strong> your government issued id, and vaccination
              proof as soon as the verification is complete.
            </p>

            {/* Contact Us */}
            <div>
              <Card className="contact-card">
                <Card.Img variant="top" className="QR-img" src={ACEQR}/>
                <Card.Title>ACE WeChat</Card.Title>
              </Card>
            </div>
          </Container>
          <Footer/>
        </div>
      )
    }

    let color, variant, message
    if (this.state.healthCodeStatus.color === "G") {
      color = "#00CC00"
      variant = "success"
      message = "Green"
    } else if (this.state.healthCodeStatus.color === "Y") {
      color = "#FFCC00"
      variant = "warning"
      message = "Yellow"
    } else if (this.state.healthCodeStatus.color === "R") {
      color = "#FF0000"
      variant = "danger"
      message = "Red"
    } else if (this.state.healthCodeStatus.color === "U") {
      color = "#555555"
      variant = "dark"
      message = "Gray"
    }

    return (
      <div>
        <NavBar/>
        <Container>
          <h3>ACE HEALTH CODE</h3>
          <Container>
            <Row>
              <Col xs={2}><Spinner animation="grow" variant={variant} /></Col>
              <Col xs={8} style={{textAlign: "center"}}>
                <div style={{fontSize: "20px", fontWeight: "bold"}}>
                  {this.state.date.toISOString()}
                </div>
              </Col>
              <Col xs={2}><Spinner animation="grow" variant={variant} /></Col>
            </Row>
            <Row>
              <Col xs={12} style={{textAlign: "center"}}>
                <QRCode
                  value={mainDomain + "api/getHealthQRCode/" + this.state.healthID + "/"}
                  size={300}
                  logoImage={ACEKnowlogo}
                  qrStyle={"dots"}
                  fgColor={color}
                  eyeRadius={[
                      [10, 10, 0, 10], // top/left eye
                      [10, 10, 10, 0], // top/right eye
                      [10, 0, 10, 10], // bottom/left
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={2}><Spinner animation="grow" variant={variant} /></Col>
              <Col xs={8} style={{textAlign: "center"}}>
                <div style={{fontSize: "20px"}}>
                  Your Health Code Color is: <br/>
                  <span style={{fontWeight: "bold", color: color}}>{message}</span><br/>
                </div>
              </Col>
              <Col xs={2}><Spinner animation="grow" variant={variant} /></Col>
            </Row>
            <Row>
              <Col xs={12} style={{textAlign: "center"}}>
                {this.state.msg}
              </Col>
            </Row>
            <MsgBox variant={"warning"} content={"If you get a green health code, it does not mean that you do not have the risk of exposed to COVID-19."}/>
            <h4>What Does The Color Mean?</h4>
            <p>If you get a green health code, that means you either get fully vaccinated against COVID-19 or you provided
            proof that you were free of COVID-19 within a certain period of time before you generate the health code.</p>
            <p>If you get a yellow health code, that means you are not fully vaccinated against COVID-19 and you have not
            provided COVID-19 test.</p>
            <p>If you get a red health code, that means you should quarantine yourself immediately. That means you are still
            within the window of travel mandatory quarantine window or you have been exposed to COVID-19 in the past 14 days.</p>
          </Container>
        </Container>
        <Footer/>
      </div>
    )
  }
}

// ========================================
export default HealthCodePage;