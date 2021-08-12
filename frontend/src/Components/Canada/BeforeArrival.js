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
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <p className="p2-before">Contact SwitchHealth by phone or email</p>
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