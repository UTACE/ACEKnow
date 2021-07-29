import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../HomePage/MainPsg.css";

class MainPsg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sidePassages:[
        {title: "2nd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Second Passage"},
        {title: "3rd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Third Passage"},
        {title: "4th", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Forth Passage"}
      ],
    }
  }

  render() {
    return(
        <div class="sideContainer">
            {this.state.sidePassages.map((passage)=>(
            <div class="card mobile-hide">
                <img class="card-img-top" src={passage.src} alt={passage.title}/>
                <div class="card-body">
                <h5 class="card-title">{passage.title}</h5>
                <p class="card-text">{passage.content}</p>
                </div>
            </div>
            ))}
            <ul class="list-group mobile-show">
                {this.state.sidePassages.map((passage)=>(
                <li class="list-group-item">
                    <h5>{passage.title}</h5>
                    {passage.content}
                </li>
                ))}
            </ul>
        </div>
    );
  }  
}

// ========================================
export default MainPsg;