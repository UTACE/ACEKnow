import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
      <div className="row top-container">
        <div className="card top-passage col-lg-6"> 
          <img className="card-img-top" src={this.state.topPassages[0].src} alt={this.state.topPassages[0].title}/>
          <div className="card-body">
            <h5 className="card-title">{this.state.topPassages[0].title}</h5>
            <p className="card-text">{this.state.topPassages[0].content}</p>
          </div>
        </div>
        <MainPsgSide content= {this.state.topPassages}/>
      </div>
    );
  }  
}

// ========================================
export default MainPsg;