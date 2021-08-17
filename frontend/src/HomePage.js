import React from 'react';
import {Container} from "react-bootstrap"
import MainPsg from './Components/HomePage/MainPsg';
import MainPsgBot from './Components/HomePage/MainPsgBot';
import {mainDomain} from "./configuration";
import NavBar from "./Components/Misc/NavBar";
import BootstrapCarousel from "./Components/HomePage/BootstrapCarousel";
import Footer from "./Components/HomePage/Footer";

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
        <>
          <NavBar/>
          <Container>
            <BootstrapCarousel/>
            <MainPsg/>
            <h5>Sponsors info here</h5>
            <MainPsgBot/>
            <Footer/>
          </Container>
        </>
    )
  }
}

// ========================================
export default HomePage;