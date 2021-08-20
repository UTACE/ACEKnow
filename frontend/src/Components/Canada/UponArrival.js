import React from 'react';
import {Container, Card} from "react-bootstrap";
import '../../styles/UponArrival.css';


class UponArrival extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {/* title */}
          <div className="h1-upon mobile-hide">Upon Arrival</div>
          <hr className="hr-upon mobile-hide"></hr>

          {/* step 1 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-upon">STEP 1.</div></Card.Header>
            <Card.Body>
                <p className="p1-upon text-primary">Provide required information and documents. Answer all eligibility and health screening questions.</p>
            </Card.Body>
          </Card>
          <ul className="ul-upon">
              <li className="p2-upon">Have your ArriveCAN receipt, test results, hotel confirmation and quarantine plan ready for assessment by a Border Services Officer.</li>
              <li className="p2-upon">Go directly to your pre-booked hotel for up to 3 nights to await results from your arrival test.</li>
          </ul>

          {/* step 2 */}
          <Card className="border-success">
            <Card.Header className="text-success"><div className="h2-upon">STEP 2.</div></Card.Header>
            <Card.Body>
                <p className="p1-upon text-success">Complete a COVID-19 molecular test.</p>
            </Card.Body>
          </Card>
          <ul className="ul-upon">
            <li className="p2-upon">When you enter Canada, you'll be instructed to either take an arrival test at the border or receive a home test kit. You may also get a kit to use on Day-8 of your mandatory quarantine.</li>
          </ul>
        </Container>
      </div>
    );
  }
}

// ========================================
export default UponArrival;
