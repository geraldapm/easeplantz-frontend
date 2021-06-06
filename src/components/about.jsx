import React, { Component } from 'react';
class About extends Component {
    render() { 
        return (      
            <section class="home-about spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h2>ABOUT EASEPLANTZ</h2>
                            <p class="short-details">Easeplantz is an Application to predict plant diseases and give recommendations about treating the diseases.</p>
                            <p class="long-details">According to the FAO, plant pests and diseases pose a greater threat to food security. Plant pests and diseases are responsible for losses of 20 to 40% of global food production. Further utilization of advanced technology is helping farmers to identify the disease quickly and helping them to find the right way to treat the disease.
                                </p>
                            <a href="#" class="primary-btn about-btn">Learn More</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="assets/img/home-about.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
 
export default About;