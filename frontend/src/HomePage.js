import React from 'react';
import {mainDomain} from "./configuration";

import VirusMap from "./Components/VirusMap";


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
        <VirusMap/>
    )
  }
}

// ========================================
export default HomePage;