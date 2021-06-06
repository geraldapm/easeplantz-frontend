/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Header extends Component {
    state = {
        menu: {
            display: 'none',
        },
        dropdown: {
            display: 'none',
        }
    }
    
    setMenu = () =>{
        if (this.state.menu.display === 'none') {
            this.setState({menu: {display: 'block'} });
        }
        else {
            this.setState({menu: {display: 'none'} });
        }
        
    }

    setDrop = () => {
        if (this.state.dropdown.display === 'none') {
            this.setState({dropdown: {display: 'block'} });
        }
        else {
            this.setState({dropdown: {display: 'none'} });
        }
    }

    render() {
        const {menu, dropdown} = this.state;
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
                        <div id="mobile-menu-wrap">
                            <div className="slicknav_menu">
                                <a onClick={this.setMenu} aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{outline: 'currentcolor none medium'}}>
                                    <span className="slicknav_menutxt">MENU</span>
                                    <span className="slicknav_icon">
                                        <span className="slicknav_icon-bar"></span>
                                        <span className="slicknav_icon-bar"></span>
                                        <span className="slicknav_icon-bar"></span>
                                    </span>
                                </a>
                                <nav className="slicknav_nav slicknav_hidden" style={menu} aria-hidden="true" role="menu">
                                    <ul>
                                        <li className="active"><a href="./index.html" role="menuitem">Home</a></li>
                                        <li><a href="./about-us.html" role="menuitem">About us</a></li>
                                        <li className="slicknav_collapsed slicknav_parent"><a onClick={this.setDrop} role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: 'currentcolor none medium'}}>
                                            <a href="./blog.html">Predictions</a>
                                            <span className="slicknav_arrow">►</span></a><ul className="dropdown slicknav_hidden" role="menu" style={dropdown} aria-hidden="true">
                                                <li><a href="./about-us.html" role="menuitem" tabIndex="-1">Corn Prediction</a></li>
                                                <li><a href="./blog-single.html" role="menuitem" tabIndex="-1">Potato Prediction</a></li>
                                                <li><a href="./blog-single.html" role="menuitem" tabIndex="-1">Tomato Prediction</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Header;