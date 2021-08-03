import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
      <div class="row">
        {this.state.bottomPassages.map((passage)=>(
            <div class="card bottom-passage">
                <img class="card-img-top" src={passage.src} alt={passage.title}/>
                <div class="card-body">
                <h5 class="card-title">{passage.title}</h5>
                <p class="card-text">{passage.content}</p>
                </div>
            </div>
        ))}
      </div>
    );
  }  
}

// ========================================
export default MainPsgBot;