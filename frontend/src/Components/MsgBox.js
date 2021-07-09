import React from 'react';
import {Row, Col, Alert} from "react-bootstrap";
import {ExclamationDiamondFill} from 'react-bootstrap-icons';

class MsgBox extends React.Component {
  render() {
    return(
      <Alert variant={this.props.variant}>
        <Row>
          <Col style={{borderLeftStyle: "solid"}} xs={1}>
            <ExclamationDiamondFill/>
          </Col>
          <Col>
            <strong>{this.props.variant}</strong>: {this.props.content}
          </Col>
        </Row>
      </Alert>
    )
  }
}

// ========================================
export default MsgBox;