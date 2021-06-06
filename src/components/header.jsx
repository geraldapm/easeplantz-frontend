import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div id="preloder">
                    <div className="loader"> 	<img  src="assets/img/ease-logo.png" alt=""/>  </div>
                    <div className="loader2"> 	<img  src="assets/img/ease-type.png" alt=""/>  </div>
                </div>
                <header className="header-section">
                    <div className="container-fluid">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="assets/img/ease-land.png" alt=""/>
                            </a>
                        </div>
                        <div className="top-social">
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                        <div className="container">
                            <div className="nav-menu">
                                <nav className="mainmenu mobile-menu">
                                    <ul>
                                        <li className="active"><a href="./index.html">Home</a></li>
                                        <li><a href="./about-us.html">About us</a></li>
                                        <li><a href="./blog.html">Predictions</a>
                                            <ul className="dropdown">
                                                <li><a href="./about-us.html">Corn Prediction</a></li>
                                                <li><a href="./blog-single.html">Potato Prediction</a></li>
                                                <li><a href="./blog-single.html">Tomato Prediction</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div id="mobile-menu-wrap"></div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Header;