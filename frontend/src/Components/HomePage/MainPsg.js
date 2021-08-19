import React from 'react';
import { Card, CardDeck} from 'react-bootstrap';
import '../../styles/MainPsg.css';
import MainPsgSide from '../HomePage/MainPsgSide';

class MainPsg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topPassages:[
        {title: "Top1st", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "First Passage"},
        {title: "Top2nd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Second Passage example message to show what the abstract gonna look like! "},
        {title: "Top3rd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Third Passage example message to show what the abstract gonna look like! "},
        {title: "Top4th", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Forth Passage example message to show what the abstract gonna look like! "}
      ],
    }
  }

  render() {
    return(
      <CardDeck className="top-container">
          <Card lg={6} className="top-passage">
            <Card.Img variant="top" src={this.state.topPassages[0].src} />
            <Card.Body>
              <Card.Title>{this.state.topPassages[0].title}</Card.Title>
              <Card.Text>{this.state.topPassages[0].content}</Card.Text>
            </Card.Body>
          </Card>
        <MainPsgSide content= {this.state.topPassages}/>
      </CardDeck>
    );
  }  
}

// ========================================
export default MainPsg;