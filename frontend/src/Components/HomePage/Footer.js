import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import '../../styles/Footer.css';

function Footer () {
    return (
        <footer>
            <div className="footer-middle">
                <div className="container">
                    <h5 className="footer-title">外站链接</h5>
                    <Row className="mobile-hide">
                        <Col sm={6} md={6}>
                            <Link className="footer-content footer-links" to="https://www.utace.club/">ACE官网</Link>
                        </Col>
                        <Col sm={6} md={6}>
                            <Link className="footer-content footer-links" to="https://github.com/UTACE">Github</Link>
                        </Col>
                    </Row>
                    <div className="mobile-show">
                        <Row className="footer-row">
                            <Link className="footer-content footer-links" to="https://www.utace.club/">ACE官网</Link>
                        </Row>
                        <Row className="footer-row">
                            <Link className="footer-content footer-links" to="https://github.com/UTACE">Github</Link>
                        </Row>
                    </div>
                    <h5 className="footer-title">About Us</h5>
                    <Row className="mobile-hide">
                        <Col sm={6} md={6}>
                            <Link className="footer-content footer-links" to="/about">Team information</Link>
                        </Col>
                        <Col sm={6} md={6}>
                            <Link className="footer-content footer-links" to="/about">Sponsors</Link>
                        </Col>
                    </Row>
                    <div className="mobile-show">
                        <Row className="footer-row">
                            <Link className="footer-content footer-links" to="/about">Team information</Link>
                        </Row>
                        <Row className="footer-row">
                            <Link className="footer-content footer-links" to="/about">Sponsors</Link>
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