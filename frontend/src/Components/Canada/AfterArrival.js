import React from 'react';
import NavBar from '../Misc/NavBar';
import Footer from '../HomePage/Footer';
import '../../styles/AfterArrival.css';

class AfterArrival extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        
        <div className = 'container'>
          
          {/* Title */}
          <div className = 'h1-after'>After Arrival</div>
          <hr className = 'hr-after'></hr>

          {/* Step 1 */}
          <div className = 'card border-primary'><div style = {{ width:'78vw' }}>
            <div className = 'card-header text-primary'><div className="h2-after">STEP 1.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-after text-primary'>Completing Your Full Quarantine</p>
            </div>
          </div></div>
          <ul className = 'ul-after'>
            <a className = 'a1-after' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Learn more about the quaratine plan here.</a>
          </ul>
          <ol className = 'ol-after'>
              <li className = 'p2-after'>Stay for 14 days or possibly longer.</li>
              <li className = 'p2-after'>Have access to the necessities of life, including water, food, medication and heat without leaving quarantine.</li>
              <li className = 'p2-after'>Avoid contact with others who did not travel with you.</li>
              <li className = 'p2-after'>Have no visits from family or guests.</li>
          </ol>
          <p className = 'p3-after'>Note:</p>
          <ul className = 'ul-after'>
            <li className = 'p2-after'>On day 8 of your quarantine, you will take another test, following the instructions provided to you. You must stay in your place of quarantine while you await the results from this test.</li>
            <li className = 'p2-after'>You can only leave your place of quarantine if you receive a negative result from your Day-8 test AND you have completed your mandatory 14-day quarantine. The 14-day quarantine period includes the days you spent at your government-authorized hotel.</li>
          </ul>

          {/* Step 2 */}
          <div className = 'card border-success'><div style = {{ width:'78vw' }}>
            <div className = 'card-header text-success'><div className = 'h2-after'>STEP 2.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-after text-success'>Check-in and Report Symptoms</p>
            </div>
          </div></div>
          <ul className = 'ul-after'>
            <li className = 'p2-after'>Use ArriveCAN or call 1-833-641-0343 to check-in the day after you enter Canada and to report symptoms daily. You will be contacted by the Government of Canada and Provincial/territorial officials.</li>
          </ul>
        </div>
       
        <Footer/>
      </div>
    );
  }
}

// ========================================
export default UponArrival;
