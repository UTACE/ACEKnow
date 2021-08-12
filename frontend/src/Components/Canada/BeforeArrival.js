import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import '../../styles/BeforeArrival.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Dropdown from 'react-bootstrap/Dropdown';


class BeforeArrival extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <div className="h1-before">Before Arrival</div>
          <hr className="hr-before"></hr>
          <div className="main-session">
            <div className="container">
              <div className="h2-before"><span>Step 1: Plan Your Quarantine</span></div>
              <br></br>
              <div class="row align-items-center">
                <div class="info-column">
                  <div class="info-card">
                      <div class="p1-before">Assess your quarantine plan before you travel</div>
                      <a href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Learn more about the plan</a>
                  </div>
                </div>
                <div class="info-column">
                    <div class="info-card">
                      <p class="p1-before">Apply UofT Quarantine Plan</p>
                      <ol>
                        <li>Full Quarantine Accommodations</li>
                        <li>Backup Quarantine Plan</li>
                        <li>At-Home Quarantine</li>
                      </ol>
                      <a href="https://starportal.utoronto.ca/StarRezPortalX/3CF1ABA3/42/3919/Mandatory_Quarantine-Quarantine_Program_R" class="btn btn-primary h3-before">Online Application</a>
                    </div>
                  </div>
                </div>
            </div>
            
            <br/>
            <div className="container">
              <div className="h2-before"><span>Step 2: Take a COVID-19 Test</span></div>
              <br/>
              <p class="p1-before">YOU MUST: </p>
                <p class="p2-before">take the test within <strong>72 hours </strong>of the scheduled departure time of your flight to Canada</p>

              <div class="row align-items-center">
                <div class="info-column">
                  <div class="info-card">
                      <p class="p1-before">Accepted Molucular Tests</p>
                      <ol>
                        <li>PCR - Polymerase chain reaction</li>
                        <li>RT-PCR – reverse transcription real time PCR</li>
                        <li>Quantitative PCR</li>
                        <li>Nucleic acid test</li>
                        <li>Droplet digital PCR or digital droplet PCR</li>
                      </ol>
                      <a href="http://test.canada.ca/covid-19-guidance/proto/travel/travel-2.0/planning-entry/flying-testing-requirements.html#getting-tested">More Acceptable Tests</a>
                    </div>
                </div>
                <div class="info-column">
                    <div class="info-card">
                      <p class="p1-before">Providing Proof of Your Result</p>
                      <ol>
                        <li>Traveler name and date of birth</li>
                        <li>Name and civic address of the laboratory/clinic/facility that administered the test</li>
                        <li>The date on which the test was conducted</li>
                        <li>The type of test conducted</li>
                        <li>The test results</li>
                      </ol>
                    </div>
                  </div>
                </div>

              <br/>
              <div className="container">
              <div className="h2-before"><span>Step 3: Create an Account</span></div>
              <br/>
              <p class="p1-before">You must <strong><a href="https://travel.gc.ca/travel-covid/travel-restrictions/flying-canada-checklist/covid-19-testing-travellers-coming-into-canada#register">CREATE AN ACCOUNT</a></strong> to perform your arrival test and access your results in advance to save time at the airport.</p>
              <div class="row align-items-center">
                <div class="info-column border-right">
                  <p class="p1-before">Airport Test Register</p>
                  <br/>
                  <div class="row justify-content-center">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                      <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary btn-warning"><strong><a href="https://info.biron.ca/inscription-yul">Montreal</a></strong></button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-secondary btn-warning"><strong><a href="https://portal.switchhealth.ca/">Toronto</a></strong></button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-secondary btn-warning"><strong><a href="https://travel.mandatory-testing.alberta.ca/">Calgary</a></strong></button>
                      </div>
                      <div class="btn-group mr-2" role="group" aria-label="Fourth group">
                        <button type="button" class="btn btn-secondary btn-warning"><strong><a href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc">Vancouver</a></strong></button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class="info-column">
                    <div class="info-card">
                      <p class="p1-before">Toronto</p>
                      <div class="h3-before">Contact SwitchHealth by phone or email</div>
                      <ul>
                        <li>Toll-free: 1-888-966-6531</li>
                        <li>Phone: 1-647-977-1030</li>
                        <li>Email: results@switchhealth.ca</li>
                      </ul>
                    </div>
                </div>
              </div>
              </div>
              
              <br/>
              <div className="container">
              <div className="h2-before"><span>Step 4: ArriveCAN</span></div>
              <br/>
              <p class="p1-before">You must use ArriveCAN to <strong><a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html#a3">SUBMIT YOUR TRAVEL DETAILS</a></strong> up to 72 hours before travel.</p>
              </div>

              <br/><br/>
              <div className="container">
              <div className="h2-before"><span>Step 5: Have Everything Ready</span></div>
              <br/>
              <p class="p1-before">You need to have your <strong>ArriveCAN receipt</strong> and <strong>Test Result </strong>ready to show when boarding.</p>
              <p class="p1-before">Once you submit your information through ArriveCAN, a receipt will be displayed and emailed to you show the receipt to a Canadian border services officer when you enter you can show your ArriveCAN receipt from: <strong>the app, a screenshot, your email or a printout</strong>.</p>
              </div>
            

              
                
              
              

            </div>

          </div>
        </div>
        

        <Footer/>
      </div>
    );
  }
}

// ========================================
export default BeforeArrival;