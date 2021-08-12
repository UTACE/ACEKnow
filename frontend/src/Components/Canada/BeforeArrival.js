import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import '../../styles/BeforeArrival.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Dropdown from 'react-bootstrap/Dropdown';
import {Dropdown} from "react-bootstrap";

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
    return (
      <div>
        <NavBar/>
        <div className = 'container'>
          
          {/* Title */}
          <div className = 'h1-before'>Before Arrival</div>
          <hr className = 'hr-before'></hr>

          {/* Step 1 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className="h2-before">STEP 1.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Plan Your Quarantine</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <a className = 'a1-before' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Assess your quarantine plan before travel.</a>
          </ul>
          <p className = 'p2-before'>Apply UofT Quarantine Plan</p>
          <ol className = 'ol-before'>
              <li className = 'p2-before'>Full Quarantine Accommodations.</li>
              <li className = 'p2-before'>Backup Quarantine Plan.</li>
              <li className = 'p2-before'>At-Home Quarantine.</li>
          </ol>

          


          {/* Step 2 */}
          <div className = 'card border-success'>
            <div className = 'card-header text-success'><div className = 'h2-before'>STEP 2.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-success'>Take a COVID-19 Test</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>You MUST take a COVID-19 molecular test within <strong>72 hours</strong> before the scheduled departure time of your flight to Canada</li>
          </ul>

          {/* Step 3 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className = 'h2-before'>STEP 3.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Create an Account for Arrival Test</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>You must create an account to perform your arrival test and access your results. Use the same email address you used for ArriveCAN.</li>
            <li className = "p2-before">
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" class="btn btn-link"><a className = 'a1-before' href="https://link.biron.ca/inscription-yul">Montreal</a></button>
                <button type="button" class="btn btn-link"><a className = 'a1-before' href="https://travel.mandatory-testing.alberta.ca/">Calgary</a></button>
                <button type="button" class="btn btn-link"><a className = 'a1-before' href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc">Vancouver</a></button>

                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <a className = 'a1-before' href="https://portal.switchhealth.ca/">Toronto</a>
                  </button>
                  <Dropdown>
                    <Dropdown.Toggle variant='secondary' autoClose={false}>
                      Toronto
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <b>Contact SwitchHealth by phone or email</b>
                      </Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
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
                                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                            <path
                                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                          </svg>
                        </p>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">Contact SwitchHealth by phone or email
                    <p className="p2-before"></p>
                    <ul className="ul-before">
                      <li className="p2-before">Toll-free: 1-888-966-6531</li>
                      <li className="p2-before">Phone: 1-647-977-1030</li>
                      <li className="p2-before">Email: results@switchhealth.ca</li>
                    </ul>
                    <a class="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/button-group/">Dropdown link</a>
                    <a class="dropdown-item" href="https://getbootstrap.com/docs/4.0/components/button-group/">Dropdown link</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Step 4 */}
          <div className = 'card border-success'>
            <div className = 'card-header text-success'><div className = 'h2-before'>STEP 4.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-success'>Submit ArriveCAN Form</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>Use <a className = 'a1-before' href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html#a3">ArriveCAN</a> to submit your travel details up to 72 hours before arrival</li>
          </ul>

          
          {/* Step 5 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className = 'h2-before'>STEP 5.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Have Documents Ready</p>
            </div>
          </div>
          <p className="p2-before">Once you submit your information through ArriveCAN, a receipt will be displayed and emailed to you show the receipt to a Canadian border services officer when you enter you can show your ArriveCAN receipt from:</p>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>the app</li>
            <li className = 'p2-before'>a screenshot</li>
            <li className = 'p2-before'>your email</li>
            <li className = 'p2-before'>a printout</li>
          </ul>
        </div>
        

        <Footer/>
      </div>
    );
  }
}

// ========================================
export default BeforeArrival;