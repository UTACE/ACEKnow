import React from 'react';
import {Container} from "react-bootstrap"
import MsgBox from "./Components/MsgBox";
import SearchBar from "./Components/SearchBar";

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
          <MsgBox variant = "light" content = "You are now in development version"/>
        </Container>
      )
    } else {
      return (
        <Container>
          Nothing here =)
          <SearchBar />
        </Container>
      )
    }
  }
}

// ========================================
export default HomePage;