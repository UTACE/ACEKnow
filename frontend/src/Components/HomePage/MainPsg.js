import React from 'react';
import "../HomePage/MainPsg.css"

class MainPsg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      passages:[
        {title: "1st", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "First Passage"},
        {title: "2nd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Second Passage"},
        {title: "3rd", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Third Passage"},
        {title: "4th", src:"https://images.dailyhive.com/20190401115942/shutterstock_1252186957.jpg", content: "Forth Passage"}
      ],
      width: window.innerWidth,
    }
  }

  componentMount() {
    window.addEventListener('resize', this.handleSizeChange);
  }
  
  componentUnmount() {
    window.removeEventListener('resize', this.handleSizeChange);
  }
  
  handleSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 540;
    if(isMobile){
      return(
        <div class="row">
          <div class="card">
            <img class="card-img-top" src={this.state.passages[0].src} alt={this.state.passages[0].title}/>
            <div class="card-body">
              <h5 class="card-title">{this.state.passages[0].title}</h5>
              <p class="card-text">{this.state.passages[0].content}</p>
            </div>
          </div>
          <div class="list-group">
            {this.state.passages.slice(1).map((passage)=>(
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <h5 class="mb-1 d-flex w-100">{passage.title}</h5>
                <p class="mb-1">{passage.content}</p>
              </a>
            ))}
          </div>
        </div>
      ); 
    }else{
      return(
        <div class="row">
          {this.state.passages.map((passage)=>(
            <div class="card hover-shadow">
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
}

// ========================================
export default MainPsg;