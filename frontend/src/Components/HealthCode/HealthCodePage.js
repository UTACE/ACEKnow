import React from 'react';
import NavBar from "./../Misc/NavBar";
import Footer from "./../HomePage/Footer";
import MsgBox from "../Misc/MsgBox";
import {Row, Col, Card, Container, Spinner} from "react-bootstrap";
import {mainDomain} from "../../configuration"

import ACEQR from "../../ACE-QR.jpg";
import ACEKnowlogo from "../../logo_268.png"
import ACEHealthlogo from "../../images/Health_code_full_icon.png"
import ACEHealthIcon from "../../images/Health_code_icon.png"
import '../../styles/AboutPage.css';

import { QRCode } from 'react-qrcode-logo';


class HealthCodePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      healthID: this.props.match.params.healthID,
      date: new Date(),
      healthCodeStatus: {},
      msg: 'Health Code Expires in 899 seconds'
    }

    setInterval(()=> this.verifyHealthCode(), 1000);
  }

  verifyHealthCode() {
    const currentDate = new Date()
    const diff = (currentDate.getTime() - this.state.date.getTime()) / 1000
    if (diff > 900) {
      this.setState({
        healthCodeStatus: {
          "color": "U",
          "message": "Health Code Expired",
          "action": "Refresh the page"
        },
        msg: 'Health Code Expired, Please Refresh'
      })
    } else {
      this.setState({
        msg: 'Health Code Expires in ' + parseInt(900 - diff) + ' seconds'
      })
    }
  }

  componentDidMount() {
    document.title = 'ACE Health Code';
    document.getElementById('header-apple-icon').href = ACEHealthIcon

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
  }

  render() {
    var certify = "%0d%0aVaccination Status:%0d%0a" +
      "Residence Postal Code:%0d%0a" +
      "WeChat ID:%0d%0a" +
      "Phone Number:%0d%0a" +
      "Email Address:%0d%0a" +
      "Flight Ticket (If applicable):%0d%0a" +
      "[**Please include Vaccination Proof(All shots)**]%0d%0a" +
      "%0d%0a" +
      "==============================================%0d%0a" +
      "%0d%0a" +
      "I promise that I will voluntarily report to ACE Health if I get a positive COVID-19 test. I can report through " +
      "sending email to ACE health email address (health@utace.club) or sending instant messages to ACE Wechat official account. " +
      "I understand that this is for the safety for myself and others around me. ACE Health can disqualify my ACE Health Code if I do " +
      "not follow the instruction and can ban me from ever applying a new ACE Health Code again.%0d%0a%0d%0a" +
      "[**Your Legal Name Here**]"


    if (this.state.healthID === "-") {
      return (
        <div>
          <NavBar/>
          <Container>
            <MsgBox variant={"success"} content={"Please send your essential documents to the ACE Health Code official email address to get a health code."}/>
            <h4>Get a Health Code</h4>
            <p>
              In order to get a health code, please send your essential documents to the ACE Health Code official email address:&nbsp;
              <a href={"mailto:health@utace.club?subject=Apply ACE Health Code&body=" + certify}>health@utace.club</a>.<br/>
              We will process and verify all your documents within 48 hours. The ACE staff will then send you
              an email contains a unique link to your health code. Please make sure <strong>NOT</strong> to disclose the unique link.
              Failed to do so may ban you from participating any ACE organized activities.
            </p>
            <a href={"mailto:health@utace.club?subject=Apply ACE Health Code&body=" + certify}>
              <img src={ACEHealthlogo} alt={"Health Code Icon"} style={{maxWidth: "80%"}}/>
            </a>
            <h4>Documents You Need To Provide</h4>
            <p>
              <li>First Name, and Last Name (for identify verification)</li>
              <li>Vaccination Proof (Either Chinese or English version is accepted)</li>
              <li>Your Residence Postal Code (for neighborhood risk assessment)</li>
              <li>Your WeChat ID (If applicable, for exposure contact)</li>
              <li>Your Phone Number (for exposure contact)</li>
              <li>Your Email Address (for exposure contact)</li>
              <li>Your Flight Ticket (If applicable)</li>
              <li>Sign a Statement (as follows)
                <p>
                  I promise that I will voluntarily report to ACE Health if I get a positive COVID-19 test. I can report through
                  sending email to ACE health email address (health@utace.club) or sending instant messages to ACE Wechat official account.
                  I understand that this is for the safety for myself and others around me. ACE Health can disqualify my ACE Health Code if I do
                  not follow the instruction and can ban me from ever applying a new ACE Health Code again.
                </p>
              </li>
            </p>
            <h4><a href={"mailto:health@utace.club?subject=Apply ACE Health Code&body=" + certify}>Apply Now</a></h4>

            <h4>Clubs, Organizations that use Health Code</h4>
            <p>
              <li>ACE Club</li>
            </p>

            <h4>Why Do We Need ACE Health Code</h4>
            <p>
              The purpose of the ACE Health Code is to ensure the safety of our staff members and all the people who attend
              our organized activities.
            </p>

            <h4>Privacy Concern Note</h4>
            <p>
              All your documents are for verification only. We will not share any of them mentioned in the list above
              with any third parties. We may keep your <strong>WeChat ID, Email and Phone Number</strong> in order to notify
              any possible COVID exposure. We will <strong>delete</strong> vaccination proof as soon as the verification
              is complete.
            </p>

            {/* Contact Us */}
            <h4>Still Have Concern?</h4>
            <p>You can contact our ACE official wechat or send email to our ACE Health Code Email address:&nbsp;
              <a href="mailto:health@utace.club?subject=ACE Health Code Inquiry">health@utace.club</a>&nbsp;for further inquiry.</p>
            <div>
              <Card className="contact-card">
                <Card.Img variant="top" className="QR-img" src={ACEQR}/>
                <Card.Title>ACE WeChat</Card.Title>
              </Card>
            </div>

            <h4>Organization Login Entry</h4>
            <a href="/login">Login</a>
          </Container>
          <Footer/>
        </div>
      )
    }

    let color, variant, message
    if (this.state.healthCodeStatus.color === "G") {
      color = "#00CC00"
      variant = "success"
      message = "Green 绿色"
    } else if (this.state.healthCodeStatus.color === "Y") {
      color = "#EEBB00"
      variant = "warning"
      message = "Yellow 黄色"
    } else if (this.state.healthCodeStatus.color === "R") {
      color = "#FF0000"
      variant = "danger"
      message = "Red 红色"
    } else if (this.state.healthCodeStatus.color === "U") {
      color = "#555555"
      variant = "dark"
      message = "Gray 灰色"
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
                  value={this.state.healthID}
                  size={300}
                  logoImage={ACEKnowlogo}
                  qrStyle={"squares"}
                  logoOpacity={0.7}
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
                  Health Code Color is: <br/>
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
            <hr/>
            <Row>
              <Col xs={12} >
                <p>{this.state.healthCodeStatus.message}</p>
                <p>{this.state.healthCodeStatus.action}</p>
              </Col>
            </Row>
            <MsgBox variant={"warning"} content={"If you get a green health code, it does not mean that you do not have the risk of exposed to COVID-19."}/>
            <h4>What Does The Color Mean?</h4>
            <p>If you get a <span style={{color: "#00CC00", fontWeight: "bold"}}>GREEN</span> health code, that means you
              either get fully vaccinated against COVID-19 or you provided proof that you were free of COVID-19 within a
              certain period of time before you generate this health code.</p>
            <p>If you get a <span style={{color: "#FFCC00", fontWeight: "bold"}}>YELLOW</span> health code, that means
              you are not fully vaccinated against COVID-19 and you have not provided a valid COVID-19 test.</p>
            <p>If you get a <span style={{color: "#FF0000", fontWeight: "bold"}}>RED</span> health code, that means you
              should quarantine yourself immediately no matter you get fully vaccinated or not. You may still within the
              window of mandatory travel quarantine window or you have been exposed to COVID-19 in the past 14 days.</p>
            <p>If you get a <span style={{color: "#555555", fontWeight: "bold"}}>GRAY</span> health code, that means your
              health code color is somehow cannot be determined. Please contact ACE official wechat account for more information.</p>
            <h4>Why Does My Health Code Color Change?</h4>
            <p>
              Your health code color may change because of the following reasons:
              <li>Travel Status</li>
              <li>Vaccination Status</li>
              <li>COVID-19 Test Status</li>
              <li>Possible COVID-19 Exposure</li>
              <li>Health Code Expires After 15 Minutes Each Time</li>
            </p>

          </Container>
        </Container>
        <Footer/>
      </div>
    )
  }
}

// ========================================
export default HealthCodePage;