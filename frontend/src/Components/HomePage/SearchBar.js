import React from "react";
import img3 from "./img/search.png";
import '../../styles/SearchBar.css';

class SearchBar extends React.Component {
  state = {
    visible: false,
    filter: "",
    data: [
      {
        Info: "COVID-19 Tracker Canada",
        Link: "https://covid19tracker.ca/vaccinationtracker.html"
      },
      {
        Info: "University of Toronto ArtSci",
        Link: "https://www.artsci.utoronto.ca"
      },
      {
        Info: "University of Toronto Engineering",
        Link: "https://www.engineering.utoronto.ca"
      },
      {
        Info: "Canada Travel Policy",
        Link: "https://travel.gc.ca/travel-covid/travel-restrictions/wizard-start"
      },
      {
        Info: "Check out UTACE",
        Link: "https://www.utace.club"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
    return Object.keys(item).some(key =>
        item[key].toLowerCase().startsWith(lowercasedFilter)
      );
    });

    return (
      <div className="box">
      <div className="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <div className="input-group form container">
          <input type="text"
                 className="form-control search-input"
                 name="search"
                 onChange={this.handleChange}
                 placeholder="Search..."
                 color="white"
          />
          <span className="input-group-btn">
            <button
                className="btn btn-search"
                onClick={()=>{this.setState({visible: true })
            }}>
              <img
                src={img3}
                width="40"
                alt="Demo"
              />
            </button>

          </span>
        </div>
        {this.state.visible ?  filteredData.map(item => (
          <div>
            {item.Info} <a href={item.Link}>Click here</a>
          </div>
        )): null}
      </div>
      </div>
    );
  }
}
export default SearchBar;