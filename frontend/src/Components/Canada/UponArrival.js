import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import '../../styles/UponArrival.css';

class UponArrival extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        
        <div className="container">
          {/* title */}
          <div className="h1-upon">Upon Arrival</div>
          <hr className="hr-upon"></hr>

          {/* step 1 */}
          <div className="card border-primary"><div style={{ width:'78vw' }}>
            <div className="card-header text-primary"><div className="h2-upon">STEP 1.</div></div>
            <div className="card-body">
                <p className="p1-upon text-primary">Provide required information and documents. Answer all eligibility and health screening questions.</p>
            </div>
          </div></div>
          <ul className="ul-upon">
              <li className="p2-upon">Have your ArriveCAN receipt, test results, hotel confirmation and quarantine plan ready for assessment by a Border Services Officer.</li>
              <li className="p2-upon">Go directly to your pre-booked hotel for up to 3 nights to await results from your arrival test.</li>
          </ul>

          {/* step 2 */}
          <div className="card border-success"><div style={{ width:'78vw' }}>
            <div className="card-header text-success"><div className="h2-upon">STEP 2.</div></div>
            <div className="card-body">
                <p className="p1-upon text-success">Complete a COVID-19 molecular test.</p>
            </div>
          </div></div>
          <ul className="ul-upon">
            <li className="p2-upon">When you enter Canada, you'll be instructed to either take an arrival test at the border or receive a home test kit. You may also get a kit to use on Day-8 of your mandatory quarantine.</li>
          </ul>

        </div>



        <Footer/>
      </div>
    );
  }
}

// ========================================
export default UponArrival;
