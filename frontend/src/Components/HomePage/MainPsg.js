import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../HomePage/MainPsg.css";

class MainPsg extends React.Component {
  render() {
    return(
      <div class="card"> 
        <img class="card-img-top" src={this.props.src} alt={this.props.title}/>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.content}</p>
        </div>
      </div>
    );
  }  
}

// ========================================
export default MainPsg;