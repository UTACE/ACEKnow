import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import { Row, Col, Container } from 'react-bootstrap';

import NavBar from "./Misc/NavBar";
import Footer from "./HomePage/Footer";

import { mainDomain } from "../configuration";


class VirusMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      updateDate: "Getting Data..",
      covidData: {},
      neighborhoodData: [],
      selectedRegion: 0,
      selectedRegionName: "",
      selectedAREA_S_CD: "",
    }
  }

  componentDidMount() {
    fetch(mainDomain + 'api/getCovidData/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {return response.json()})
      .then(response => {
        this.setState({
          updateDate: response.data.time,
          covidData: response.data.data
        })
    })

    fetch(mainDomain + 'api/getNeighborhoodData/', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {return response.json()})
      .then(response => {
        this.setState({
          neighborhoodData: response.data.neighborhood,
        })
    })
  }

  regionClick(e) {
    console.log(e.target.options.id)

    this.setState({
      selectedRegion: e.target.options.id,
      selectedRegionName: this.state.neighborhoodData[e.target.options.id].properties.AREA_NAME,
      selectedAREA_S_CD: this.state.neighborhoodData[e.target.options.id].properties.AREA_S_CD,
    })
  }

  regionLevelStr(num) {
    const fillPurpleOptions = { fillColor: 'purple' }
    const fillRedOptions = { fillColor: 'red' }
    const fillYellowOptions = { fillColor: 'yellow' }
    const fillBlueOptions = { fillColor: 'blue' }
    const fillGreenOptions = { fillColor: 'green' }
    const fillUndefOptions = { fillColor: 'gray' }

    if (num < 1.5) {
      return { fillOption: fillGreenOptions, str: "Low" }
    } else if (num < 3) {
      return { fillOption: fillBlueOptions, str: "Medium-low" }
    } else if (num < 5) {
      return { fillOption: fillYellowOptions, str: "Medium" }
    } else if (num < 12) {
      return { fillOption: fillRedOptions, str: "Medium-high" }
    } else if (num >= 12 && num !== 9999) {
      return { fillOption: fillPurpleOptions, str: "High" }
    } else if (num === 9999) {
      return { fillOption: fillUndefOptions, str: "No Info" }
    }
  }

  beautifiedRiskStr(num) {
    let risk = this.regionLevelStr(num)

    return <h1 style={{ color: risk.fillOption.fillColor }}>{risk.str}</h1>
  }


  render() {
    var areaLayer = []
    if (this.state.neighborhoodData.length !== 0) {
      for (let i = 0; i < this.state.neighborhoodData.length; i++) {
        let fillOption
        let regionID = parseInt(this.state.neighborhoodData[i].properties.AREA_S_CD)

        if (this.state.covidData[regionID.toString()] === undefined) {
          fillOption = this.regionLevelStr(9999).fillOption
        } else {
          fillOption = this.regionLevelStr(this.state.covidData[regionID.toString()].Indicator).fillOption
        }

        var reversed = this.state.neighborhoodData[i].geometry.coordinates[0].map(function reverse(item) {
          return [item[1], item[0]];
        });

        areaLayer.push(
          <Polygon weight={1.5} color={"gray"} opacity={0.5} fillOpacity={0.4} pathOptions={fillOption} positions={reversed} key={i} id={i} eventHandlers={{
            click: (e) => {
              this.regionClick(e)
            },
          }}/>
        )
      }
    }

    let rightPanel = []
    if (this.state.selectedAREA_S_CD !== "") {
      rightPanel.push(<Row key="riskStr">
                <div style={{width: "100%", textAlign: "center", fontSize: "40px"}}>
                  Risk
                </div>
                <div style={{width: "100%", textAlign: "center"}}>
                  {this.beautifiedRiskStr(this.state.covidData[parseInt(this.state.selectedAREA_S_CD).toString()].Indicator)}
                </div>
              </Row>)
      rightPanel.push(
        <div key="newCase">
          <Row style={{fontSize: "32px"}}>{this.state.covidData[parseInt(this.state.selectedAREA_S_CD).toString()].newCase} cases</Row>
          <Row>were reported in the last 14 days</Row>
        </div>
      )
      rightPanel.push(
        <div key="caseDensity" style={{marginTop: "20px"}}>
          <Row>
            <h5>New COVID cases density (case/km2)</h5>
          </Row>
          <Row>
            {this.state.covidData[parseInt(this.state.selectedAREA_S_CD).toString()].caseDensity.toFixed(1)}
          </Row>
        </div>
      )
    } else {
      rightPanel.push(
        <Row><h5>Please Select a Region</h5></Row>
      )
    }

    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""/>
        <NavBar/>
        <Container>
          <h4 style={{marginTop: "20px", marginBottom: "20px"}}>COVID Neighborhood Risk Map</h4>
          <Row>
            <Col md={9}>
              <MapContainer center={[43.71, -79.38]} zoom={11} style={{ height: "60vh" }}>
                {areaLayer}
                <TileLayer
                  attribution='&copy; OpenStreetMap, CartoDB'
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Col>

            <Col md={3} style={{ paddingTop: "20px" }}>
              <Container>
                <Row>
                  Last updated at: {this.state.updateDate}
                </Row>
                <Row>
                  <h5>{this.state.selectedRegionName}</h5>
                </Row>
                <hr/>
                <div style={{marginLeft: "10px", marginRight: "10px"}}>
                  {rightPanel}
                </div>
              </Container>
              <hr/>
            </Col>
          </Row>
          <Row style={{marginTop: "20px"}}>
            <Col md={9}>
              <Container>
                <Row>
                  <h5 style={{textAlign: "left"}}>Risk Legend (low to high)</h5>
                </Row>
                <Row>
                  <Col xs={2}>
                    <Row style={{color: "black", backgroundColor: "rgba(0, 225, 0, 0.4)"}}>Low</Row>
                  </Col>
                  <Col xs={3}>
                    <Row style={{color: "black", backgroundColor: "rgba(0, 0, 255, 0.4)", fillOpacity: 0.4}}>Medium-low</Row>
                  </Col>
                  <Col xs={2}>
                    <Row style={{color: "black", backgroundColor: "rgba(255, 255, 0, 0.4)", fillOpacity: 0.4}}>Medium</Row>
                  </Col>
                  <Col xs={3}>
                    <Row style={{color: "black", backgroundColor: "rgba(255, 0, 0, 0.4)", fillOpacity: 0.4}}>Medium-high</Row>
                  </Col>
                  <Col xs={2}>
                    <Row style={{color: "black", backgroundColor: "rgba(180, 0, 180, 0.5)", fillOpacity: 0.4}}>High</Row>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={3}/>
          </Row>
          <Row style={{marginTop: "20px"}}>
            <Container>
              <h5>Note</h5>
              <p style={{textAlign: "left"}}>
                The risk level is calculated using the data from <a href="https://www.toronto.ca/home/covid-19/covid-19-latest-city-of-toronto-news/covid-19-pandemic-data/">Toronto Public Health</a>
                &nbsp;and Toronto Census Data from 2016. The risk level takes the consideration of population, population density, new cases per neighborhood and education level. We are actively
                improving the algorithm behind this indicator to reflect the risk of catching COVID-19 if you reside in the neighborhood. <strong>The indicator is for reference ONLY. DO NOT make any life or
                death decision based on this indicator.</strong>
              </p>
            </Container>
          </Row>
        </Container>
        <Footer/>
      </div>
    )
  }
}

// ========================================
export default VirusMap;