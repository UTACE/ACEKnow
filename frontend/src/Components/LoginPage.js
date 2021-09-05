import React from 'react';
import {Form, Button, Col, Row, Alert, Container} from "react-bootstrap";
import { Redirect } from 'react-router'

import NavBar from "./Misc/NavBar";
import Footer from "./HomePage/Footer";

import healthCodeIcon from "../images/Health_code_full_icon.png"

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errmsg: false,
    }
    console.log(props.isLoggedIn)
  }

  submitHandler() {
    this.props.loginHandler(
      this.state.username,
      this.state.password
    ).then(result => {
      if (!result) {
        this.setState({
          errmsg: true
        })
      }
    })
  }

  usernameHandler(event) {
    this.setState({
      username: event.target.value
    });
  }

  passwordHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    let errmsg = "";
    if (this.state.errmsg) {
      errmsg = (
        <Alert variant="danger" style={{padding: "10px"}}>
          Incorrect username or Password. Please retry.
        </Alert>
      )
    }

    if (this.props.isLoggedIn) {
      return <Redirect to='/verifyHealthCode'/>;
    }

    return (
      <>
        <NavBar/>
        <Container>
          <Row style={{width: "100%"}}>
            <Col md={5} xs={7} className="align-self-center" style={{padding: "5%"}}>
              <h3>Please Login Here</h3>
              {errmsg}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter username" onChange={this.usernameHandler.bind(this)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={e => {e.preventDefault(); this.submitHandler(e)}} style={{marginTop: "20px"}}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={7} xs={5} className="align-self-center">
              <img
                src={healthCodeIcon}
                style={{width: "100%", maxWidth: "200px"}}
                className="d-inline-block align-top homepageImg"
                alt="ACE Health Code Logo"
              />
            </Col>
          </Row>
        </Container>
        <Footer/>
      </>
    )
  }
}

// ========================================
export default LoginPage;