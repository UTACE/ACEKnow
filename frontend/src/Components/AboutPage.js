import React from 'react';
import NavBar from "./Misc/NavBar";
import Footer from "./HomePage/Footer";
import {Row, Col, Card, Button, Container} from "react-bootstrap";
import ACEQR from '../ACE-QR.jpg';
import ace_group_photo from '../ace_group_photo.jpeg'
import '../styles/AboutPage.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Container>
        {/* Title */}
        <h1 className="h1-about">About Us</h1>

        {/* ACEKknow Intro */}
        <div className="about-section">
          <h2 className="h2-about"><span>ACEKnow Intro</span></h2>
          <p className="p1-about text-center">
           ACEKnow provides an easy access point for all new/return students where they can find useful information.
          </p>
        </div>

        {/* ACE Intro */}
        <div className="about-section">
          <h2 className="h2-about"><span>ACE Intro</span></h2>
          <Row className="align-items-center">
            <Col lg={6} className="intro-column">
              <img
              className="ace-img"
              src={ace_group_photo}
              alt="ACE" />
            </Col>
            <Col lg={6} className="intro-column">
              <p className="p1-about">
                ACE is a student-run, non-profit organization dedicated to promoting Chinese culture, 
                as well as fostering friendship and communication between its members. 
                As the unique Chinese culture club in the engineering faculty, 
                ACE is a newly formed club merged from two original cultural clubs, 
                Chinese Engineering Students Association (CESA) and Engineering Chinese Club (ECC) in 2016 summer, 
                with 30 executives and around 600 active members annually from CESA and ECC in the past.
              </p>
            </Col>
          </Row>
        </div>

        {/* Contact Us */}
        <div className="about-section">
          <h2 className="h2-about"><span>Contact Us</span></h2>
          <Card className="contact-card">
            <Card.Img variant="top" className="QR-img" src={ACEQR}/>
            <Card.Title>ACE WeChat</Card.Title>
            {/*<Card.Text>Want join us? We Are Waiting For You!!</Card.Text>*/}
            {/*<Button href="https://mp.weixin.qq.com/s/owiSdQJ0g3IBPQYt9edDIg" variant="outline-primary">I AM IN !</Button>*/}
          </Card>
        </div>
      </Container>
      <Footer/>
      </div>
    );
  }
}

// ========================================
export default AboutPage;
