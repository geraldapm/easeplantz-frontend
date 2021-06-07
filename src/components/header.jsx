/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                <header className={'header-section ' + this.props.type}>
                    <div className="container-fluid">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/img/ease-land.png" alt=""/>
                            </Link>
                        </div>
                        <div className="top-social">
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                        <div className="container">
                            <div className="nav-menu">
                                <nav className="mainmenu mobile-menu">
                                    <ul>
                                        <li className="active"><Link to="/" role="menuitem">Home</Link></li>
                                        <li><Link to="/about" role="menuitem">About us</Link></li>
                                        <li><Link to="/prediction" >Predictions</Link>
                                            <ul className="dropdown">
                                                <li><Link to="/prediction?model=corn">Corn Prediction</Link></li>
                                                <li><Link to="/prediction?model=potato">Potato Prediction</Link></li>
                                                <li><Link to="/prediction?model=tomato">Tomato Prediction</Link></li>
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
                                        <li className="active"><Link to="/" role="menuitem">Home</Link></li>
                                        <li><Link to="/about" role="menuitem">About us</Link></li>
                                        <li className="slicknav_collapsed slicknav_parent"><a onClick={this.setDrop} role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: 'currentcolor none medium'}}>
                                            <Link to="/prediction" >Predictions</Link>
                                            <span className="slicknav_arrow">►</span></a><ul className="dropdown slicknav_hidden" role="menu" style={dropdown} aria-hidden="true">
                                                <li><Link to="/prediction?model=corn" role="menuitem" tabIndex="-1">Corn Prediction</Link></li>
                                                <li><Link to="/prediction?model=potato" role="menuitem" tabIndex="-1">Potato Prediction</Link></li>
                                                <li><Link to="/prediction?model=tomato" role="menuitem" tabIndex="-1">Tomato Prediction</Link></li>
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