import React from 'react';
import {Container} from "react-bootstrap"
import MsgBox from "./Components/MsgBox";

import {mainDomain} from "./configuration";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: false,
    }
  }

  componentDidMount() {
    fetch(mainDomain + 'api/getDebugInfo/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {return response.json()})
      .then(response => {
        this.setState({
          debug: response.debug
        })
    })
  }
  render() {
    if (this.state.debug) {
      return (
        <Container>
          <MsgBox variant = "dark" content = "Hello ACEKnow"/>
        </Container>
      )
    } else {
      return (
        <Container>
          Nothing here =)
        </Container>
      )
    }
  }
}

// ========================================
export default HomePage;