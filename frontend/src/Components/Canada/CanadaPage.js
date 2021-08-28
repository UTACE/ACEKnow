import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import * as Survey from "survey-react";
import { Container, Row, Col, DropdownButton, Dropdown, Nav, Tab} from 'react-bootstrap';
import BeforeArrival from "../Canada/BeforeArrival";
import UponArrival from "../Canada/UponArrival";
import AfterArrival from "../Canada/AfterArrival";

import "survey-react/survey.css";
import "../../styles/CanadaPage.css";
import "../../styles/Misc/Misc.css"

class CanadaPage extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      title: "Getting Started",
      isComplete: false,
      result:{
        firstArrive: "",
        designatedCountry:"",
        haveVaccinated: "",
        typeVaccination: "",
        quarantine: "",
      },
      selectedKey: ""
    }

    this.onComplete = this.onComplete.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  json = {
    title: "Please Fill in Some Basic Questions Before Begin...",
    startSurveyText: "Start",
    firstPageIsStarted: true,
    pages: [
      {
        questions: [
            {
                type: "html",
                html: "In order to provide the most related information regarding individual case, <br/> " +
                  "please fill some basic questions.<br/>" +
                  "Click<b>'Start'</b>to begin.<br/><br/>Note: We will not collect any information you enter."
            }
        ]
      }, {
        questions: [
          {
              type: "radiogroup",
              name: "firstArrive",
              title: "Have you ever entered Canada?",
              choices: [
                "Yes", "No"
              ],
              isRequired: true
          }
        ]
      }, {
        questions: [
          {
              type: "radiogroup",
              name: "designatedCountry",
              visibleIf: "{firstArrive} = 'Yes'",
              title: "Will you have stayed in any designated country (See Q2 Note) for over six months at the time of next arrival to Canada?",
              choices: [
                  "Yes", "No"
              ],
              isRequired: true
          }
        ]
      },{
        questions: [
          {
              type: "radiogroup",
              name: "haveVaccinated",
              title: "What will be your vaccination status 14 days before entry?",
              choices: [
                  "Vaccinated (includes partially vaccinated)", "Not vaccinated"
              ],
              isRequired: true
          }
        ]
      }, {
        questions: [
            {
              type: "radiogroup",
              name: "typeVaccination",
              title: "What vaccination have you done?",
              visibleIf:"{haveVaccinated}='Vaccinated (includes partially vaccinated)'",
              choices: [
                "Two shots of mRNA (Pfizer, Moderna) vaccines / 两剂mRNA（辉瑞，摩德纳）疫苗",
                "Two shots of AstraZeneca/COVISHIELD vaccines / 两剂阿兹利康疫苗",
                "Two mixed shots of the above three vaccines / 以上三种疫苗的混接",
                "One shot of Janssen/Johnson & Johnson / 一剂强生疫苗",
                "Two shots of Sinopharm vaccines / 两剂国药疫苗",
                "Two shots of Sinovac vaccines / 两剂科兴疫苗",
                "Partially vaccinated or other"
              ],
              isRequired: true
            }
        ]
      },{
        questions: [
          {
              type: "radiogroup",
              name: "quarantine",
              visibleIf:"{haveVaccinated}='Not vaccinated' or " +
                "{typeVaccination}='Two shots of Sinopharm vaccines / 两剂国药疫苗' or " +
                "{typeVaccination}='Two shots of Sinovac vaccines / 两剂科兴疫苗' or" +
                "{typeVaccination}='Partially vaccinated or other'",
              title: "Will you have a place to quarantine for 14 days upon your arrival?",
              choices: [
                  "Yes", "No"
              ],
              isRequired: true
          }
        ]
      }
    ],
    completedHtml: "<h4 class='end-feedback'>感谢你填写以上问题<br/>短暂加载后我们将为你提供所需信息</h4><br/><br/>"
  };


  componentDidMount() {    
    Survey.Survey.cssType = "default";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-dark";
    var defaultThemeColors = Survey.StylesManager.ThemeColors["default"];
    defaultThemeColors["$background-dim"] = "#ffffff";
    Survey.StylesManager.applyTheme("default");
  }

  onComplete(survey, options) {
    console.log('Updating State');
    console.log("Result JSON:\n" + JSON.stringify(survey.data, null, 5));

    console.log(this)
    this.setState({
      isComplete: true,
      selectedKey: "Before Arriving Canada",
      result: survey.data
    })
  }

  handleSelect(e){
    console.log(e)
    this.setState({selectedKey: e})
  }
  
  render() {
    var model = new Survey.Model(this.json);

    if (!this.state.isComplete)
    {
      return (
        <div>
          <NavBar/>
          <Container>
            <Tab.Container id="canada-tabs" defaultActiveKey="Getting Started" onSelect={this.handleSelect}>
              <Row className="canada-main-content">
                <Col lg={3} md={12}>
                  <Nav variant="pills" className="flex-column" style={{marginTop: "20px"}}>
                    <Nav.Item>
                      <Nav.Link eventKey="Getting Started">Getting Started</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={9} md={12}>
                  <Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="Getting Started">
                        <div className="survey">
                          <Survey.Survey model={model} onComplete={this.onComplete}/>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                  <Row>
                    <p>Q2 Note: <a href='https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents/country-requirements.html'>Designated Country List</a></p>
                  </Row>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <NavBar/>
          <Container>
            <Tab.Container id="canada-tabs2" onSelect={this.handleSelect} activeKey={this.state.selectedKey}>
              <Row className="canada-main-content">
                <Col lg={3} md={12}>
                  <Nav variant="pills" className="flex-column mobile-hide" style={{marginTop: "20px"}}>
                    <Nav.Item>
                      <Nav.Link eventKey="Before Arriving Canada">Before Arriving Canada</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Upon Arriving Canada">Upon Arriving Canada</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="After Arriving Canada">After Arriving Canada</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <DropdownButton variant="Secondary" className="canada-menu mobile-show" alignCenter title={this.state.selectedKey}>
                    <Dropdown.Item className="can-head-menu" eventKey="Before Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>Before Arriving Canada</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="can-head-menu" eventKey="Upon Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>Upon Arriving Canada</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="can-head-menu" eventKey="After Arriving Canada" onClick={(e)=> this.handleSelect(e.target.textContent)}>After Arriving Canada</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col lg={9} md={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Before Arriving Canada">
                      <BeforeArrival selectionResult={this.state.result}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Upon Arriving Canada">
                      <UponArrival selectionResult={this.state.result}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="After Arriving Canada">
                      <AfterArrival selectionResult={this.state.result}/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
          <Footer/>
        </div>
      )
    }
  }
}

// ========================================
export default CanadaPage;