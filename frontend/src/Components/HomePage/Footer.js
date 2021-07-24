import React from 'react'
import "./Footer.css"
import {ReactComponent as Logo} from "./logo.svg";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <h5>外站链接</h5>
                </div>
                <hr  style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}/>

                <div className="row">
                    <h5>联系我们</h5>
                </div>
                <hr  style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor : '#000000'
                }}/>

                <div className="row">
                    <div className="col">
                        <h4>Logo</h4>
                    </div>
                    <div className="col">
                        <h4 position>Logo image</h4>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer;