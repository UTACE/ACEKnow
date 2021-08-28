import React from 'react'
import {Card, Container, Dropdown, Alert, Tabs, Tab} from "react-bootstrap"

import '../../styles/BeforeArrival.css'
import '../../styles/Misc/Misc.css'

function copy(content) {
  const el = document.createElement('input');
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

class BeforeArrival extends React.Component {
  render() {
    let physicalExam;
    // firstArrive: whether you ever arrived in Canada, so "yes" means arrived in Canada before
    if ((this.props.selectionResult.firstArrive === "Yes" && this.props.selectionResult.designatedCountry === "Yes") ||
      this.props.selectionResult.firstArrive === "No") {
      physicalExam = (
        <div>
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 1.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">You need to provide a physical body exam.</p>
            </Card.Body>
          </Card>
        </div>
      )
    } else {
      physicalExam = (
        <div>
          <Card className="border-success">
            <Card.Header className="text-success"><div className="h2-before">No physical body exam required</div></Card.Header>
            <Card.Body>
              <p className="p1-before text-success">You do not need to provide a physical body exam.</p>
            </Card.Body>
          </Card>
        </div>
      )
    }

    console.log(this.props.selectionResult.typeVaccination)

    let findAResidenceWarning;
    let planQuarantinePlan;
    let beforeTravelTest;

    if ((this.props.selectionResult.typeVaccination === "Two shots of Sinopharm vaccines / 两剂国药疫苗" ||
        this.props.selectionResult.typeVaccination === "Two shots of Sinovac vaccines / 两剂科兴疫苗" ||
        this.props.selectionResult.typeVaccination === "Partially vaccinated or other") &&
        (this.props.selectionResult.quarantine === "No")
    ) {
      findAResidenceWarning = (
        <div>
          <Alert variant='danger' style={{marginTop: "20px"}}>
            Note: You MUST find a place to quarantine before your arrival. Otherwise, you <strong>MAY BE REJECTED</strong> to enter Canada at the border.
          </Alert>
        </div>
      )
    }

    if (this.props.selectionResult.typeVaccination === "Two shots of mRNA (Pfizer, Moderna) vaccines / 两剂mRNA（辉瑞，摩德纳）疫苗" ||
        this.props.selectionResult.typeVaccination === "Two shots of AstraZeneca/COVISHIELD vaccines / 两剂阿兹利康疫苗" ||
        this.props.selectionResult.typeVaccination === "Two mixed shots of the above three vaccines / 以上三种疫苗的混接" ||
        this.props.selectionResult.typeVaccination === "One shot of Janssen/Johnson & Johnson / 一剂强生疫苗"
    ) {
      planQuarantinePlan = (
        <div>
          <Card className="border-success">
            <Card.Header className="text-success"><div className="h2-before">No Quarantine Plan Required</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-success">Exempt From Mandatory Quarantine</p>
            </Card.Body>
          </Card>

          <p className = 'p2-before'>
            You have already received vaccines that are approved by Canada Border Service. You can be exempted from mandatory
            quarantine.
          </p>
        </div>
      )
    } else if (this.props.selectionResult.typeVaccination === "Two shots of Sinopharm vaccines / 两剂国药疫苗" ||
               this.props.selectionResult.typeVaccination === "Two shots of Sinovac vaccines / 两剂科兴疫苗"
    ) {
      planQuarantinePlan = (
        <div>
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 2.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Plan Your Quarantine</p>
            </Card.Body>
          </Card>

          <Alert variant='danger' style={{marginTop: "20px"}}>
            Note: You received vaccines that have not yet been approved by Canada Border Service. You have to make your quarantine plan.
          </Alert>

          <a className = 'a1-before' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Click here to assess your quarantine plan before travel.</a>
          <ol className = 'ol-before'>
              <li className = 'p2-before'>Full Quarantine Accommodations.</li>
              <li className = 'p2-before'>Backup Quarantine Plan.</li>
              <li className = 'p2-before'>At-Home Quarantine.</li>
          </ol>
        </div>
      )
    } else {
      planQuarantinePlan = (
        <div>
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 2.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Plan Your Quarantine</p>
            </Card.Body>
          </Card>

          <a className = 'a1-before' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Click here to assess your quarantine plan before travel.</a>
          <ol className = 'ol-before'>
              <li className = 'p2-before'>Full Quarantine Accommodations.</li>
              <li className = 'p2-before'>Backup Quarantine Plan.</li>
              <li className = 'p2-before'>At-Home Quarantine.</li>
          </ol>
        </div>
      )
    }


    if (this.props.selectionResult.typeVaccination === "Two shots of mRNA (Pfizer, Moderna) vaccines / 两剂mRNA（辉瑞，摩德纳）疫苗" ||
        this.props.selectionResult.typeVaccination === "Two shots of AstraZeneca/COVISHIELD vaccines / 两剂阿兹利康疫苗" ||
        this.props.selectionResult.typeVaccination === "Two mixed shots of the above three vaccines / 以上三种疫苗的混接" ||
        this.props.selectionResult.typeVaccination === "One shot of Janssen/Johnson & Johnson / 一剂强生疫苗"
    ) {
      beforeTravelTest = (
        <div>
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 4.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Take a COVID-19 Test</p>
            </Card.Body>
          </Card>

          <Alert variant='danger' style={{marginTop: "20px"}}>
            Note: You have already received vaccines that are approved by Canada Border Service. However, you still need to
            take a COVID-19 test.
          </Alert>

          <p className = 'p2-before'>
            You MUST take a COVID-19 molecular test within <strong>72 hours</strong> before the scheduled departure time of your flight to Canada.
          </p>
        </div>
      )
    } else {
      beforeTravelTest = (
        <div>
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 4.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Take a COVID-19 Test</p>
            </Card.Body>
          </Card>

          <p className = 'p2-before'>
            You MUST take a COVID-19 molecular test within <strong>72 hours</strong> before the scheduled departure time of your flight to Canada
          </p>
        </div>
      )
    }


    return (
      <div>    
        <Container>
          {/* Title */}
          <div className = 'h1-before mobile-hide'>Before Arrival</div>
          <hr className = 'hr-before mobile-hide'/>
          {findAResidenceWarning}

          {/* Step 1 */}
          {physicalExam}

          {/* Step 2 */}
          {planQuarantinePlan}

          {/* Step 3 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 3.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Register For a University of Toronto Quarantine Program</p>
            </Card.Body>
          </Card>

          <p className = 'p2-before'>All students arriving by air or land must register for a University of Toronto Quarantine Program 72 hours prior to arrival in Canada.
            Register for the U of T 14-day quarantine program through <a href="https://starportal.utoronto.ca/StarRezPortalX/923B5FD6/1/1/Home-StarRez___University">StarRez</a>.</p>

          {/* Step 4 */}
          {beforeTravelTest}

          {/* Step 5 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 5.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Create an Account for Arrival Test</p>
            </Card.Body>
          </Card>

          <p className = 'p2-before'>
            You must create an account to perform your arrival test and access your results. Use the same email address you used for ArriveCAN.
          </p>

          {/* Different city requirement */}
          <div className = "tabs-container">
            <Tabs fill className="row tabs-row" variant="pills" defaultActiveKey="toronto">
              
              {/* Toronto Info */}
              <Tab eventKey="toronto" title="Toronto" className="col tabs-col">
                  <Dropdown.Item className="contact-method" href="https://portal.switchhealth.ca/">
                    Contact <strong>SwitchHealth</strong> <br className="mobile-show"/> by phone or email
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                      className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      &nbsp; 
                        <a className="a3-before" href="https://portal.switchhealth.ca/">
                          Click to Visit Website
                        </a>  
                      &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; Toll-free: 1-888-966-6531 &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; Phone: 1-647-977-1030 &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={event => {copy("results@switchhealth.ca")}}>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-envelope" viewBox="0 0 16 16">
                      <path
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                      </svg>
                      &nbsp; results@switchhealth.ca &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="copy-button" viewBox="0 0 16 16">
                        <path
                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path
                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                      </svg>
                    </p>
                  </Dropdown.Item>
              </Tab>
              
              {/* Vancouver Info */}
              <Tab eventKey="vancouver" title="Vancouver" className="col tabs-col">
                  <Dropdown.Item href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc/">
                    Contact <strong>LifeLabs</strong> <br className="mobile-show"/> by phone or email
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                      className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      &nbsp; 
                        <a className="a3-before" href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc/">
                          Click to Visit Website
                        </a>  
                      &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; Toll-free: 1-800-431-7206 &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; Testing: 1-800-431-7206 &nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; Phone: 1-604-431-7206&nbsp;
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={event => {copy("ContactUs-BC@LifeLabs.com")}}>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-envelope" viewBox="0 0 16 16">
                      <path
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                      </svg>
                      &nbsp; ContactUs-BC@LifeLabs.com &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="copy-button" viewBox="0 0 16 16">
                        <path
                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                        <path
                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                      </svg>
                    </p>
                  </Dropdown.Item>
              </Tab>
              
              {/* Montreal Info */}
              <Tab eventKey="montreal" title="Montreal" className="col tabs-col">
                No information yet.
              </Tab>

              {/* Calgary Info */}
              <Tab eventKey="calgary" title="Calgary" className="col tabs-col">
                <Dropdown.Item href="https://travel.mandatory-testing.alberta.ca/">
                  Contact <strong>Government of Alberta</strong> <br className="mobile-show"/> by phone
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                      className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      &nbsp; 
                        <a className="a3-before" href="https://travel.mandatory-testing.alberta.ca/">
                          Click to Visit Website
                        </a>  
                      &nbsp;
                    </p>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      &nbsp; COVID Response: 310-4455 &nbsp;
                    </p>
                  </Dropdown.Item>
              </Tab>
            
            </Tabs>
          </div>
          <br/>



          {/* Step 6 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 6.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Submit ArriveCAN Form</p>
            </Card.Body>
          </Card>

          <p className = 'p2-before'>Use
            <a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html#a3">
              &nbsp;ArriveCAN&nbsp;
            </a> 
          to submit your travel details up to 72 hours before arrival</p>
          
          {/* Step 7 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-before">STEP 7.</div></Card.Header>
            <Card.Body>
                <p className="p1-before text-primary">Have Documents Ready</p>
            </Card.Body>
          </Card>

          <p className="p2-before">
            Once you submit your information through ArriveCAN, a receipt will be displayed and emailed to you show the receipt to a Canadian border services officer when you enter you can show your ArriveCAN receipt from:
          </p>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>the app</li>
            <li className = 'p2-before'>a screenshot</li>
            <li className = 'p2-before'>your email</li>
            <li className = 'p2-before'>a printout</li>
          </ul>
        </Container>
      </div>
    );
  }
}

// ========================================
export default BeforeArrival;