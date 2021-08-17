import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../styles/MainPsg.css';

class MainPsg extends React.Component {

  render() {
    return(
        <div className="sideContainer col-lg-6">
            {this.props.content.slice(1).map((passage)=>(
            <div className="card mobile-hide top-passage">
                <img className="card-img-top" src={passage.src} alt={passage.title}/>
                <div className="card-body">
                <h5 className="card-title">{passage.title}</h5>
                <p className="card-text">{passage.content}</p>
                </div>
            </div>
            ))}
            <ul className="list-group mobile-show top-passage">
                {this.props.content.slice(1).map((passage)=>(
                <li className="list-group-item">
                    <h5 className="list-title">{passage.title}</h5>
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