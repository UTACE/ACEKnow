import React from 'react';
import {Container} from "react-bootstrap"
import DevMsgBox from "./Components/HomePage/DevMsgBox";

import {mainDomain} from "./configuration";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      djangoDev: false,
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
          djangoDev: response.debug
        })
    })
  }
  render() {
    return (
      <Container>
        <DevMsgBox djangoDev={this.state.djangoDev} reactDev={this.props.reactDev}/>
        Nothing here =)
      </Container>
    )
  }
}

// ========================================
export default HomePage;