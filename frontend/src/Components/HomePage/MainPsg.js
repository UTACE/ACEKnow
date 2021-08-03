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
        {title: "Top2nd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Second Passage"},
        {title: "Top3rd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Third Passage"},
        {title: "Top4th", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Forth Passage"}
      ],
    }
  }

  render() {
    return(
      <div class="row">
        <div class="card top-passage"> 
          <img class="card-img-top" src={this.state.topPassages[0].src} alt={this.state.topPassages[0].title}/>
          <div class="card-body">
            <h5 class="card-title">{this.state.topPassages[0].title}</h5>
            <p class="card-text">{this.state.topPassages[0].content}</p>
          </div>
        </div>
        <MainPsgSide content= {this.state.topPassages}/>
      </div>
    );
  }  
}

// ========================================
export default MainPsg;