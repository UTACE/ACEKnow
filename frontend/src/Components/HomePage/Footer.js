import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import '../../styles/Footer.css';

function Footer () {
    return (
        <footer>
            <div className="footer-middle">
                <div className="container">
                    <h5 className="footer-title">External Links</h5>
                    <Row className="mobile-hide">
                        <Col sm={6} md={6}>
                            <a className="footer-content footer-links" href="https://www.utace.club/">ACE Official Website</a>
                        </Col>
                        <Col sm={6} md={6}>
                            <a className="footer-content footer-links" href="https://github.com/UTACE">Github</a>
                        </Col>
                    </Row>
                    <div className="mobile-show">
                        <Row className="footer-row">
                            <a className="footer-content footer-links" href="https://www.utace.club/">ACE官网</a>
                        </Row>
                        <Row className="footer-row">
                            <a className="footer-content footer-links" href="https://github.com/UTACE">Github</a>
                        </Row>
                    </div>
                    <h5 className="footer-title">About Us</h5>
                    <Row className="mobile-hide">
                        <Col sm={6} md={6}>
                            <Link className="footer-content footer-links" to="/about">Team information</Link>
                        </Col>
                    </Row>
                    <div className="mobile-show">
                        <Row className="footer-row">
                            <Link className="footer-content footer-links" to="/about">Team information</Link>
                        </Row>
                    </div>
                    <Image style={{height: "80px", width: "auto"}} src="/static/logo540.png"></Image>
                </div>


                {/* Footer-bottom */}
                <div className="footer-bottom">
                    <p className="rights-reserve">
                        &copy;{new Date().getFullYear} ACEKnow - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;