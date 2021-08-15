import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import * as Survey from "survey-react";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { Row, Col} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import BeforeArrival from "../Canada/BeforeArrival";
import UponArrival from "../Canada/UponArrival";
import AfterArrival from "../Canada/AfterArrival";
import "survey-react/survey.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CanadaPage.css";

class CanadaPage extends React.Component {
  constructor(){
    super();
    
    this.state = {
        title: "Getting Started"
    }
}

  json = {
    title: "基本情况",
    startSurveyText: "开始填写",
    firstPageIsStarted: true,
    pages: [
      {
        questions: [
            {
                type: "html",
                html: "为了更准确的为你提供所需信息， <br/> 我们需要了解一些基本情况。<br/>点击<b>'开始填写'</b>进入问卷环节。<br/><br/>本问卷不含任何涉及隐私的问题。"
            }
        ]
      }, {
        questions: [
          {
              type: "radiogroup",
              name: "first-arrive",
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
              name: "designated-country",
              visibleIf: "{first-arrive} = 'No'",
              title: "Will you have stayed in designated country for over six months at the time of next arrival to Canada?",
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
              name: "have-vaccinated",
              title: "What will be your vaccination status 14 days before entry?",
              choices: [
                  "Vaccinated (including not partially vaccinated)", "Not vaccinated"
              ],
              isRequired: true
          }
        ]
      }, {
        questions: [
            {
              type: "radiogroup",
              name: "kind-vaccination",
              title: "What vaccination have you done?",
              visibleIf: "{have-vaccinated}='Vaccinated (including not partially vaccinated)'",
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
              visibleIf:"{have-vaccinated}='Not vaccinated' or {kind-vaccination}='Partially vaccinated or other'",
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
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-dark";
  }

  onComplete(survey, options) {
  console.log("Result JSON:\n" + JSON.stringify(survey.data, null, 5));
  }

  titleChange(text){
    this.setState({title: text})
  }

  render() {
    var model = new Survey.Model(this.json);    
    return (
      <div>
        <NavBar/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="survey">
          <Row className="canada-main-content">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mobile-hide">
                <Nav.Item>
                  <Nav.Link eventKey="survey">Getting Started</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="before-arrival">Before Arriving Canada</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="upon-arrival">Upon Arriving Canada</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="after-arrival">After Arriving Canada</Nav.Link>
                </Nav.Item>
              </Nav>
              <DropdownButton variant="secondary" className="canada-menu mobile-show" alignCenter title={this.state.title}>
                <Dropdown.Item eventKey="survey" onClick={(e)=> this.titleChange(e.target.textContent)}>Getting Started</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="before-arrival" onClick={(e)=> this.titleChange(e.target.textContent)}>Before Arriving Canada</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="upon-arrival" onClick={(e)=> this.titleChange(e.target.textContent)}>Upon Arriving Canada</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="after-arrival" onClick={(e)=> this.titleChange(e.target.textContent)}>After Arriving Canada</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="survey">
                  <div className="survey">
                    <Survey.Survey model={model} onComplete={this.onComplete}/>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="before-arrival">
                  <BeforeArrival/>
                </Tab.Pane>
                <Tab.Pane eventKey="upon-arrival">
                  <UponArrival/>
                </Tab.Pane>
                <Tab.Pane eventKey="after-arrival">
                  <AfterArrival/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Footer/>
      </div>
    );
  }
}

// ========================================
export default CanadaPage;