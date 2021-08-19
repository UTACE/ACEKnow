import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import '../../styles/MainPsg.css';

class MainPsgBot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bottomPassages:[
        {title: "Bottom1st", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Bottom fist Passage"},
        {title: "Bottom2nd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Bottom second Passage"},
        {title: "Bottom3rd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Bottom third Passage"}
      ],
    }
  }

  render() {
    return(
      <CardDeck>
        {this.state.bottomPassages.map((passage)=>(
          <Card className="bottom-passage">
            <Card.Img variant="top" src={passage.src} />
            <Card.Body>
            <Card.Title>{passage.title}</Card.Title>
            <Card.Text>{passage.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    );
  }  
}

// ========================================
export default MainPsgBot;