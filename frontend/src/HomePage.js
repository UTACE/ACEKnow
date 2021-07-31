import React from 'react';
import {Container} from "react-bootstrap"
import DevMsgBox from "./Components/HomePage/DevMsgBox";
import MainPsg from './Components/HomePage/MainPsg';
import MainPsgSide from './Components/HomePage/MainPsgSide';
import MsgBox from "./Components/Misc/MsgBox";
import {mainDomain} from "./configuration";
// import SearchBar from "./Components/HomePage/SearchBar";
import NavBar from "./Components/Misc/NavBar";
import BootstrapCarousel from "./Components/HomePage/BootstrapCarousel";
// import Footer from "./Components/HomePage/Footer";

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
        <NavBar/>
        <DevMsgBox djangoDev={this.state.djangoDev} reactDev={this.props.reactDev}/>
        <MsgBox variant = "success" content = "You have created an alert."/>
        {/*<SearchBar/>*/}
        <BootstrapCarousel/>
        Nothing here =)
        <div className="row">
          <MainPsg title="1st" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="First Passage"/>
          <MainPsgSide/>
        </div> 
        <div className="row">
          <MainPsg title="Bottom 1st" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom First Passage"/>  
          <MainPsg title="Bottom 2nd" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom Second Passage"/>  
          <MainPsg title="Bottom 3rd" src="https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg" content="Bottom Third Passage"/>  
        </div>
        {/*<Footer/>*/}
      </Container>
    )
  }
}

// ========================================
export default HomePage;