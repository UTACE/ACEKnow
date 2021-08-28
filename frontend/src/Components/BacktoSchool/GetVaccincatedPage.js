import React from 'react'
import {Card, Container, Dropdown, Alert, Tabs, Tab} from "react-bootstrap"

import '../../styles/Misc/Misc.css'
import '../../styles/BacktoSchool/BacktoSchool.css'

class GetVaccincatedPage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {/* Title */}
          <div className = 'h1-bts mobile-hide'>Go Get Vaccinated</div>
          <hr className = 'hr-bts mobile-hide'/>
          {/*<img*/}
          {/*    className="ace-img"*/}
          {/*    src={chinese_flyer}*/}
          {/*    alt="COVID-19 Go To Vaccinated (Simplified Chinese)" />*/}
          {/*<img*/}
          {/*  className="ace-img"*/}
          {/*  src={english_flyer}*/}
          {/*  alt="COVID-19 Go To Vaccinated (English)" />*/}
        </Container>
      </div>
    )
  }
}

// ========================================
export default GetVaccincatedPage;