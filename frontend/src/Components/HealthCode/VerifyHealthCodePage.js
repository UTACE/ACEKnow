import React from 'react';
import QrReader from 'react-qr-reader'
import { Redirect } from 'react-router'

import NavBar from "./../Misc/NavBar";
import Footer from "./../HomePage/Footer";
import {Container} from "react-bootstrap";

class VerifyHealthCodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'No result'
    }
    console.log(props.isLoggedIn)
  }

  handleScan = data => {
    console.log("HANDLE SCAN", data)
    var that = this
    if (data) {
      this.setState({
        result: data
      })

      this.props.requestHandler("GET", data)
        .then(response => response.json())
        .then(response => {
          console.log(response)
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    if (!this.props.isLoggedIn && this.props.isLoggedInChecked) {
      return <Redirect to='/login'/>;
    } else if (!this.props.isLoggedInChecked) {
      return <p>Authenticating...</p>
    }
    return (
      <div>
        <NavBar isLoggedIn={this.props.isLoggedIn} logoutHandler={this.props.logoutHandler}/>
        <Container>
          <QrReader
            delay={100}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%', maxWidth: "300px" }}
          />
        </Container>

        <p>{this.state.result}</p>
        <Footer/>
      </div>
    )
  }
}


// ========================================
export default VerifyHealthCodePage;