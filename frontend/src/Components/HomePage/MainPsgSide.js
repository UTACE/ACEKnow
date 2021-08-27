import React from 'react'
import {Col, Card} from 'react-bootstrap'

import '../../styles/MainPsg.css'
import '../../styles/Misc/Misc.css'

class MainPsg extends React.Component {
  render() {
    return(
        <Col lg={6} className="sideContainer">
            {this.props.content.slice(1).map((passage)=>(
                <Card className="mobile-hide top-passage">
                    <Card.Img variant="top" src={passage.src} />
                    <Card.Body>
                    <Card.Title>{passage.title}</Card.Title>
                    <Card.Text>{passage.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
            <ul className="list-group mobile-show top-passage">
                {this.props.content.slice(1).map((passage)=>(
                <li className="list-group-item">
                    <h5 className="list-title">{passage.title}</h5>
                    {passage.content}
                </li>
                ))}
            </ul>
        </Col>
    );
  }  
}

// ========================================
export default MainPsg;