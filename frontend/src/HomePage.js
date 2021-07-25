import React from 'react';
import {Container} from "react-bootstrap"
import DevMsgBox from "./Components/HomePage/DevMsgBox";
import MainPsg from './Components/HomePage/MainPsg';
import MainPsgSide from './Components/HomePage/MainPsgSide';
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
        <div class="row">
          <MainPsg title="1st" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="First Passage"/>
          <MainPsgSide/>
        </div> 
        <div class="row">
          <MainPsg title="Bottom 1st" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom First Passage"/>  
          <MainPsg title="Bottom 2nd" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom Second Passage"/>  
          <MainPsg title="Bottom 3rd" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom Third Passage"/>  
        </div>
      </Container>
    )
  }
}

// ========================================
export default HomePage;