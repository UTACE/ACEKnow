import React from 'react';
import NavBar from "./Misc/NavBar";
import Footer from "./HomePage/Footer";
import logo from "../logo_268.png";

class ChinaPage extends React.Component {
  render() {
    return (
      <div>
        <link rel="apple-touch-icon" href={logo} />
        <NavBar/>
        <div>Nothing yet</div>
        <Footer/>
      </div>
    );
  }
}

// ========================================
export default ChinaPage;