import React from 'react';
import {Container, Card} from "react-bootstrap";
import '../../styles/UponArrival.css';


class UponArrival extends React.Component {
  render() {
    if (this.props.selectionResult.typeVaccination === "Two shots of mRNA (Pfizer, Moderna) vaccines / 两剂mRNA（辉瑞，摩德纳）疫苗" ||
        this.props.selectionResult.typeVaccination === "Two shots of AstraZeneca/COVISHIELD vaccines / 两剂阿兹利康疫苗" ||
        this.props.selectionResult.typeVaccination === "Two mixed shots of the above three vaccines / 以上三种疫苗的混接" ||
        this.props.selectionResult.typeVaccination === "One shot of Janssen/Johnson & Johnson / 一剂强生疫苗"
    ) {
      return (
        <div>
          <Container>
            {/* title */}
            <div className="h1-upon mobile-hide">Upon Arrival</div>
            <hr className="hr-upon mobile-hide"/>

            {/* step 1 */}
            <Card className="border-primary">
              <Card.Header className="text-primary"><div className="h2-upon">STEP 1.</div></Card.Header>
              <Card.Body>
                  <p className="p1-upon text-primary">Provide required information and documents. Answer all eligibility and health screening questions.</p>
              </Card.Body>
            </Card>
            <ul className="ul-upon">
                <li className="p2-upon">Have your ArriveCAN receipt, test results, and proofs of vaccination ready for assessment by a Border Services Officer.</li>
            </ul>

            {/* step 2 */}
            <Card className="border-primary">
              <Card.Header className="text-primary"><div className="h2-upon">STEP 2.</div></Card.Header>
              <Card.Body>
                  <p className="p1-upon text-primary">Complete a possible COVID-19 molecular test.</p>
              </Card.Body>
            </Card>
            <ul className="ul-upon">
              <li className="p2-upon">When you enter Canada, you may be instructed to either take an arrival test at the border or receive a home test kit. </li>
            </ul>

            <a href="https://travel.gc.ca/travel-covid/travel-restrictions/covid-vaccinated-travellers-entering-canada#entry-vaccinated">*Government of Canada - COVID-19 vaccinated travellers entering Canada</a>
          </Container>
        </div>
      );
    }

    return (
      <div>
        <Container>
          {/* title */}
          <div className="h1-upon mobile-hide">Upon Arrival</div>
          <hr className="hr-upon mobile-hide"/>

          {/* step 1 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-upon">STEP 1.</div></Card.Header>
            <Card.Body>
                <p className="p1-upon text-primary">Provide required information and documents. Answer all eligibility and health screening questions.</p>
            </Card.Body>
          </Card>
          <ul className="ul-upon">
              <li className="p2-upon">Have your ArriveCAN receipt, test results, and quarantine plan ready for assessment by a Border Services Officer.</li>
          </ul>

          {/* step 2 */}
          <Card className="border-primary">
            <Card.Header className="text-primary"><div className="h2-upon">STEP 2.</div></Card.Header>
            <Card.Body>
                <p className="p1-upon text-primary">Complete a COVID-19 molecular test.</p>
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
