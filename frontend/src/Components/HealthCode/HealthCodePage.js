import React from 'react';
import NavBar from "./../Misc/NavBar";
import Footer from "./../HomePage/Footer";
import MsgBox from "../Misc/MsgBox";
import {Row, Col, Card, Container} from "react-bootstrap";
import ACEQR from "../../ACE-QR.jpg";

import '../../styles/AboutPage.css';


class HealthCodePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      healthID: this.props.match.params.healthID
    }
  }

  componentDidMount() {

  }

  render() {
    if (this.state.healthID === "-") {
      return (
        <div>
          <NavBar/>
          <Container>
            <MsgBox variant={"warning"} content={"Please contact ACE official wechat to get a health code."}/>
            <h4>Get a Health Code</h4>
            <p>
              In order to get a health code, please send your essential information to ACE official wechat.
              We will process and verify all your documents within 48 hours. The ACE staff will then send you
              a unique link to your health code. Please make sure not to disclose the unique link. Failed to do
              so may ban you from participate ACE organized activities.
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


    return (
      <div>
        <NavBar/>
        <Container>
          <h1>HEALTH CODE</h1>
          <h2>{this.state.healthID}</h2>
        </Container>
        <Footer/>
      </div>
    )
  }
}

// ========================================
export default HealthCodePage;