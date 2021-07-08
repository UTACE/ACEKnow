import React, {useState} from 'react';
import MsgBox from "./MsgBox";

function SearchItem(props){
    const[item, setItem] = useState("");
}

class SearchBar extends React.Component {
    render() {
        return (
            <div className = "container">
                <div>
                    <h2>
                        Type something to search:
                    </h2>
                </div>
                <div>
                    <input type="text" className="input" placeholder="Search..." />
                    <button type="button" className="btn btn-primary"> Search </button>
                </div>

            </div>
        )
    }
}
export default SearchBar;