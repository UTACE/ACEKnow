import React, {useState} from 'react';
import MsgBox from "./MsgBox";
import '../SearchBar.css';

function SearchItem(props){
    const[item, setItem] = useState("");
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            height: props.height
        }
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({query: query});
    }
    render() {
        const {query} = this.state; /* save query in state into constant query */
        console.warn(this.state);
        return (
            <div className = "container">
            <h2>Type something to search:</h2>
            <label className="search-label" htmlFor="search-input">
                <input
                        type="text"
                        name="query"
                        value={query}
                        id="search-input"
                        className="input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}

                    />

                <button type="button" className="btn btn-primary"> Search </button>
            </label>
                <div>
                    <div>You just searched for: { query }</div>
                </div>

            </div>
        )
    }
}
export default SearchBar;