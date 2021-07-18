import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import '../../styles/Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ACEKnow</h1>
                <div className= "menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}><a className={item.cName} href={item.url}>
                                {item.title}
                            </a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;