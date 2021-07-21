import React from 'react';
import {Container} from "react-bootstrap"
import DevMsgBox from "./Components/HomePage/DevMsgBox";
import MainPsg from './Components/HomePage/MainPsg';
import MsgBox from "./Components/Misc/MsgBox";
import {mainDomain} from "./configuration";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      djangoDev: true,
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
        <MsgBox variant = "success" content = "You have created an alert."/>
        Nothing here =)
        <MainPsg />
      </Container>
    )
  }
}

// ========================================
export default HomePage;