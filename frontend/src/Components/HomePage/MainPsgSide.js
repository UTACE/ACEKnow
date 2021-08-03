import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../styles/MainPsg.css';

class MainPsg extends React.Component {

  render() {
    return(
        <div class="sideContainer col-lg-6">
            {this.props.content.slice(1).map((passage)=>(
            <div class="card mobile-hide top-passage">
                <img class="card-img-top" src={passage.src} alt={passage.title}/>
                <div class="card-body">
                <h5 class="card-title">{passage.title}</h5>
                <p class="card-text">{passage.content}</p>
                </div>
            </div>
            ))}
            <ul class="list-group mobile-show top-passage">
                {this.props.content.slice(1).map((passage)=>(
                <li class="list-group-item">
                    <h5 class="list-title">{passage.title}</h5>
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