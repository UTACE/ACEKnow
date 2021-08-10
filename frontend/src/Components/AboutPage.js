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
        <h1 className="h1-about">About Us</h1>

        {/* ACEKknow Intro */}
        <div className="container">
          <h2 className="h2-about"><span>ACEKnow Intro</span></h2>
          <div className="contianer-about"><div className="front-break1"></div></div>
          <p className="p1-about text-center">
          His title, King of Heroes, is not meant to call him a king who is a hero, but instead implies that he is the king over all heroes. The heroes of various myths are derived from his legend, so his Gate of Babylon possesses all of their Noble Phantasms. Though there are numerous kings with titles such as the King of Knights or the King of Conquerors, he is the only one in all of heaven and earth crowned with the title of "King of All Heroes."
          </p>
        </div>

        <div className="contianer-about"><div className="end-break"></div></div>

        {/* ACE Intro */}
        <div className="container">
          <h2 className="h2-about"><span>ACE Intro</span></h2>

          <div className="contianer"><div className="front-break"></div></div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
              className="ace-img"
              src="https://media-exp1.licdn.com/dms/image/C561BAQFMxRUPohW0SA/company-background_10000/0/1554158299698?e=2159024400&v=beta&t=SC7lOclAPupM8ipIbylrAIpm7MTW5mBvIKG9ifiMM6w"
              alt="ACE" />
            </div>
            <div className="col-lg-6">
              <p className="p1-about">
                Born with a body that was of the highest grade by mortal standards and knowledge reaching truth, Gilgamesh was born, designed, as king and the Wedge of Heaven to connect the rising humans and the fading gods. He was sent to ensure the humans and bind the earth slowly leaving the Age of Gods. He was a being embodying the two life sets of life forms, with the blood of those who had ruled and the blood of those who would rule from thereon.
              </p>
            </div>
          </div>
        </div>

        <div className="contianer"><div className="end-break"></div></div>

        {/* Contact Us */}
        <div className="container">
          <h2 className="h2-about"><span>Contact Us</span></h2>
          <div className="contact-box">
            <div className="contact-row">
              <div className="contact-column">
                <div className="contact-card">
                  <img
                  className="img-about"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfHtq4xjbXtotSwo7-3b87rc2CpiZqfv6D96sOECcuqNwwRsSAxoOXyPKdjh2KsK4zSc&usqp=CAU" 
                  alt="QR code" />

                  <h5 className="card-title">ACE WeChat</h5>
                  <p className="card-text">Outside of the human world, there is a magical world where human fairies are capable of using magic, ruled by the powerful Fairy Queen.</p>
                  <a
                  href="https://www.youtube.com/watch?v=bseyU2PvBQo"
                  className="btn btn-primary">
                    Link to XXX
                  </a>
                </div>
              </div>
              <div className="contact-column">
                <div className="contact-card">
                Other contact information list here XXXXX
                <br></br>XXX<br></br>XXX
                </div>
              </div>
              <div className="contact-column">
                <div className="contact-card">
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
