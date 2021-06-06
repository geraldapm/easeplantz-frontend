import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <section class="cta-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cta-text">
                                    <h3>Easeplantz</h3>
                                    <p>Predict your plant diseases using machine learning technology!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <footer class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer-logo-item">
                                <div class="f-logo">
                                    <a href="#"><img src="assets/img/ease-land.png" alt=""/></a>
                                </div>
                                <p>With large adaptations of machine learning technology in agricultural industries, we hope that Indonesia will once again becoming the largest agricultural industry in Southeast Asia</p>
                                <div class="social-links">
                                    <h6>Follow us</h6>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 offset-lg-1">
                            <div class="footer-widget">
                                <h5>Our Blog</h5>
                                <div class="footer-blog">
                                    <a href="#" class="fb-item">
                                        <h6>Most people who work</h6>
                                        <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </a>
                                    <a href="#" class="fb-item">
                                        <h6>Freelance Design Tricks How </h6>
                                        <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </a>
                                    <a href="#" class="fb-item">
                                        <h6>have a computer at home have had </h6>
                                        <span class="blog-time"><i class="fa fa-clock-o"></i> Jan 02, 2019</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="footer-widget">
                                <h5>Documentations</h5>
                                <ul class="workout-program">
                                    <li><a href="#">Github</a></li>
                                    <li><a href="#">API</a></li>
                                    <li><a href="#">Proposal</a></li>
                                    <li><a href="#">Slides</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="footer-widget">
                                <h5>Get Info</h5>
                                <ul class="footer-info">
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <span>Phone:</span>
                                        (12) 345 6789
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope-o"></i>
                                        <span>Email:</span>
                                        testing@testing.id
                                    </li>
                                    <li>
                                        <i class="fa fa-map-marker"></i>
                                        <span>Address</span>
                                        Iris Watson, Box 283 8562, NY
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                        <div class="copyright-text">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <div class="ct-inside">
                Easeplantz &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  Made with <i class="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
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