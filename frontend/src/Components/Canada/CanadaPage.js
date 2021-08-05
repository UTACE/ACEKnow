import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CanadaPage.css";

class CanadaPage extends React.Component {

  json = {
    title: "基本情况",
    showProgressBar: "Top",
    startSurveyText: "开始填写",
    firstPageIsStarted: true,
    pages: [
      {
        questions: [
            {
                type: "html",
                html: "为了更准确的为你提供所需信息， 我们需要了解一些基本情况。<br/>点击<b>'开始填写'</b>进入问卷环节。<br/><br/>本问卷不含任何涉及隐私的问题。"
            }
        ]
      }, {
        questions: [
          {
              type: "radiogroup",
              name: "firstArrive",
              title: "请问这是否是你第一次来加拿大？",
              choices: [
                "是", "否"
              ],
              isRequired: true
          }
        ]
      }, {
        questions: [
          {
              type: "radiogroup",
              name: "HasArrived",
              title: "请问你是否已经抵达加拿大?",
              choices: [
                  "是", "否"
              ],
              isRequired: true
          }
        ]
      }, {
        questions: [
            {
              type: "radiogroup",
              name: "vaccination",
              title: "请问你是否注射了疫苗？",
              choices: [
                "是，注射了：Pfizer。。。。疫苗",
                "是，注射了：XXX国内疫苗",
                "否，我尚未注射疫苗"
              ],
              isRequired: true
            }
        ]
      }
  ],
  completedHtml: "<h4>感谢你填写以上问题<br/>短暂加载后我们将为你提供所需信息</h4>"
};
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-dark";
  }

  onComplete(survey, options) {
  console.log("Result JSON:\n" + JSON.stringify(survey.data, null, 4));
  }

  render() {
    var model = new Survey.Model(this.json);    
    return (
      <div>
        <NavBar/>
        <div className="survey">
          <Survey.Survey model={model} onComplete={this.onComplete}/>
        </div>
        <div>Nothing for canada page yet</div>
        <Footer/>
      </div>
    );
  }
}

// ========================================
export default CanadaPage;