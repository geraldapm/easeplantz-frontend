import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <section className="cta-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cta-text">
                                    <h3>Easeplantz</h3>
                                    <p>Predict your plant diseases using machine learning technology!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-logo-item">
                                <div className="f-logo">
                                    <Link to="/"><img src="assets/img/ease-land.png" alt=""/></Link>
                                </div>
                                <p>With large adaptations of machine learning technology in agricultural industries, we hope that Indonesia will once again becoming the largest agricultural industry in Southeast Asia</p>
                                <div className="social-links">
                                    <h6>Follow us</h6>
                                    <a href="https://youtube.com"><i className="fa fa-youtube"></i></a>
                                    <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="footer-widget">
                                <h5>Our Blog</h5>
                                <div className="footer-blog">
                                    <Link to="/" className="fb-item">
                                        <h6>Most people who work</h6>
                                        <span className="blog-time"><i className="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </Link>
                                    <Link to="/" className="fb-item">
                                        <h6>Freelance Design Tricks How </h6>
                                        <span className="blog-time"><i className="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </Link>
                                    <Link to="/" className="fb-item">
                                        <h6>have a computer at home have had </h6>
                                        <span className="blog-time"><i className="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget">
                                <h5>Documentations</h5>
                                <ul className="workout-program">
                                    <li><a href="https://github.com/">Github App</a></li>
                                    <li><a href="https://github.com/">Github Backend</a></li>
                                    <li><a href="https://github.com/">Github Frontend</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-widget">
                                <h5>Get Info</h5>
                                <ul className="footer-info">
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>Phone:</span>
                                        (12) 345 6789
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o"></i>
                                        <span>Email:</span>
                                        testing@testing.id
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Address</span>
                                        Iris Watson, Box 283 8562, NY
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="copyright-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="ct-inside">
                Easeplantz &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  Made with <i className="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com">Colorlib</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </footer>
            </React.Fragment>
        );
    }
}
 
export default Footer;