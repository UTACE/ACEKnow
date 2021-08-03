import React from 'react';
import NavBar from "./Misc/NavBar";
import Footer from "./HomePage/Footer"
import '../styles/AboutPage.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutUs">
        <NavBar/>
        {/* Title */}
        <h1>About Us</h1>

        {/* ACEKknow Intro */}
        <div class="container">
          <h2 ><span>ACEKnow Intro</span></h2>
          <p class="p1 text-center">
          His title, King of Heroes, is not meant to call him a king who is a hero, but instead implies that he is the king over all heroes. The heroes of various myths are derived from his legend, so his Gate of Babylon possesses all of their Noble Phantasms. Though there are numerous kings with titles such as the King of Knights or the King of Conquerors, he is the only one in all of heaven and earth crowned with the title of "King of All Heroes."
          </p>
        </div>

        {/* ACE Intro */}
        <div class="container">
          <h2><span>ACE Intro</span></h2>
          <br></br>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
              class="ace-img"
              src="https://www.utace.club/static/userpage/images/aboutus.jpg"
              alt="ACE" />
            </div>
            <div class="col-lg-6">
              <p class="p1">
                Born with a body that was of the highest grade by mortal standards and knowledge reaching truth, Gilgamesh was born, designed, as king and the Wedge of Heaven to connect the rising humans and the fading gods. He was sent to ensure the humans and bind the earth slowly leaving the Age of Gods. He was a being embodying the two life sets of life forms, with the blood of those who had ruled and the blood of those who would rule from thereon.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <br></br><br></br>
        <div class="container">
          <h2><span>Contact Us</span></h2>
          <div class="contact-box">
            <div class="contact-row">
              <div class="contact-column">
                <div class="contact-card">
                  <img
                  class="center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfHtq4xjbXtotSwo7-3b87rc2CpiZqfv6D96sOECcuqNwwRsSAxoOXyPKdjh2KsK4zSc&usqp=CAU" 
                  alt="QR code" />

                  <h5 class="card-title">ACE WeChat</h5>
                  <p class="card-text">Outside of the human world, there is a magical world where human fairies are capable of using magic, ruled by the powerful Fairy Queen.</p>
                  <a
                  href="https://www.youtube.com/watch?v=bseyU2PvBQo"
                  class="btn btn-primary">
                    Link to XXX
                  </a>
                </div>
              </div>
              <div class="contact-column">
                <div class="contact-card">
                Other contact information list here XXXXX
                <br></br>XXX<br></br>XXX
                </div>
              </div>
              <div class="contact-column">
                <div class="contact-card">
                Other contact information list here XXXXX
                <br></br>XXX<br></br>XXX
                </div>
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
export default AboutPage;
