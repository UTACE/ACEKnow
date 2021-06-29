import React from 'react';
import {Row, Col, Alert} from "react-bootstrap";
import {ExclamationDiamondFill} from 'react-bootstrap-icons';

class MsgBox extends React.Component {
  render() {
    return(
      <Alert variant={"danger"}>
        <Row>
          <Col style={{borderLeftStyle: "solid"}} xs={1}>
            <ExclamationDiamondFill/>
          </Col>
          <Col>
            <strong>Danger</strong>: You are now in development version
          </Col>
        </Row>
      </Alert>
    )
  }
}

// ========================================
export default MsgBox;