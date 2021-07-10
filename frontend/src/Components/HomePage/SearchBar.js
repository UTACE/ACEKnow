import React from "react";
import MsgBox from "../Misc/MsgBox";

class SearchBar extends React.Component{

    state = {
        // names: [
        //   'Robert',
        //   'Louis',
        //   'Catherine',
        //   'Vicky',
        //   'Richard'
        // ],
        searchTerm: ''
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    searchButtonPressed = () => {
        return <MsgBox variant = "success" content = "success"/>
    }

    render() {
        return(
            <div style = {{textAlign: 'center', paddingTop: '3vh'}}>
                <div>
                    <input type = "text" value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder= "Search for a name!"/>
                </div>
                <div className = "row mt-3">
                    <div className = "col-4"/>
                    <button type = "button" className = "col-4 btn btn-primary" onClick={this.searchButtonPressed}>Search</button>
                </div>
            </div>
        )
    }
}
export default SearchBar;