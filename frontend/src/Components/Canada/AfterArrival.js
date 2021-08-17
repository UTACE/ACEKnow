import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Card} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../styles/AfterArrival.css';

class AfterArrival extends React.Component {

  render() {
    return (
      <div>
        <div className = 'container'>
          
          {/* Title */}
          <div className = 'h1-after mobile-hide'>
            After Arrival
            <hr className = 'hr-after' />
          </div>
          {/* Step 1 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className="h2-after">STEP 1.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-after text-primary'>Completing Your Full Quarantine</p>
            </div>
          </div>
          <a className = 'a1-after' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Click here to learn more about the plan.</a>
          <ol className = 'ol-after'>
              <li className = 'p2-after'>Stay for 14 days or possibly longer.</li>
              <li className = 'p2-after'>Have access to the necessities of life, including water, food, medication and heat without leaving quarantine.</li>
              <li className = 'p2-after'>Avoid contact with others who did not travel with you.</li>
              <li className = 'p2-after'>Have no visits from family or guests.</li>
          </ol>

          <Accordion className = 'mobile-show'>
            <Card className = 'accordion-card'>
              <Accordion.Toggle as={Card.Header} eventKey="note">
                <strong>Note</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                className="bi bi-caret-down-fill expand-icon" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="note">
                <Card.Body className="note-body">
                  <ul className = 'ul-after'>
                    <li className = 'p2-after'>
                    On day 8 of your quarantine, you will take another test, following the instructions provided to you. 
                    You must stay in your place of quarantine while you await the results from this test.
                    </li>
                    <li className = 'p2-after'>
                      You can only leave your place of quarantine if you receive a negative result from your Day-8 test AND you have completed your mandatory 14-day quarantine. 
                      The 14-day quarantine period includes the days you spent at your government-authorized hotel.
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <p className = 'p3-after mobile-hide'>Note:</p>
          <ul className = 'ul-after mobile-hide'>
            <li className = 'p2-after'>On day 8 of your quarantine, you will take another test, following the instructions provided to you. You must stay in your place of quarantine while you await the results from this test.</li>
            <li className = 'p2-after'>You can only leave your place of quarantine if you receive a negative result from your Day-8 test AND you have completed your mandatory 14-day quarantine. The 14-day quarantine period includes the days you spent at your government-authorized hotel.</li>
          </ul>

          {/* Step 2 */}
          <div className = 'card border-success'>
            <div className = 'card-header text-success'><div className = 'h2-after'>STEP 2.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-after text-success'>Check-in and Report Symptoms</p>
            </div>
          </div>
          <p className = 'p2-after checkin-info'>
            Use ArriveCAN or call 1-833-641-0343 to check-in the day after you enter Canada and to report symptoms daily. You will be contacted by the Government of Canada and Provincial/territorial officials.
          </p>
        </div>
      </div>
    );
  }
}

// ========================================
export default AfterArrival;
