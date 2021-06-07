import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class HeroSlide extends Component {
    bg = [
        'assets/img/hero-slider/hero-1.jpg',
        'assets/img/hero-slider/hero-2.jpg',
        'assets/img/hero-slider/hero-3.jpg',
    ];
    render() { 
        return (
            <section className="hero-section">
                <OwlCarousel className="hero-items owl-carousel" loop items={1} nav navText={['<i style="font-size: 60px; color: #ffffff" class="arrow_carrot-left"></i>','<i style="font-size: 60px; color: #ffffff" class="arrow_carrot-right"></i>']}>
                    {this.bg.map(bgs => (
                        <div key={bgs} className="single-hero-item set-bg" style={{ backgroundImage: "url("+bgs+")"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-text">
                                            <h2>Welcome To</h2>
                                            <h1>EASEPLANTZ</h1>
                                            <Link to="/" className="primary-btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </section>
            
        );
    }
}
 
export default HeroSlide;