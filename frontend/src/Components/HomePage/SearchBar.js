import React from "react";

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
      <div className = "searchbar-container">
        <div>
          <input value={filter} onChange={this.handleChange} placeholder="Search..."/>
          <button className="btn btn-primary my-2 my-sm-0" onClick={()=>{
            this.setState({visible: true})
          }}>Search</button>
        </div>
        {this.state.visible ?  filteredData.map(item => (
          <div>
            {item.Info} <a href={item.Link}>Click here</a>
          </div>
        )): null}
      </div>
    );
  }
}
export default SearchBar;