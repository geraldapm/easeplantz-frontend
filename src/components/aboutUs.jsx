import React, { Component } from 'react';
class AboutUs extends Component {
    state = {  }
    render() { 
        return (
            <section className="aboutus-section spad">
                <div className="container">
                    <div className="aboutus-page-text">
                            <div className="row">
                                <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="section-title">
                                    <h2>Who we Are & What We Do</h2>
                                    <p>Easeplantz is an application that helps people to predict plant diseases using machine learning technology. After predicting the diseases, we will give the recommendations about treating the diseases with our app.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-us">
                                    <h4>ABOUT US</h4>
                                    <p>Indonesia is a country with a mega biodiversity. In Indonesia, breeding programmes for crop improvement have been developed more than 10 years. Crop improvements conducted were to increase crop resistance to biotic stress such as pests and diseases
                                        Many crops in Indonesia have benefited from improvement programmes  utilizing advanced methodologies and technologies, such as food crops like rice, soybean, maize, sweet potato, cassava, peanut; vegetable crops like potato, tomato
                                        Diversing food crops could substantially reduce rice consumption which in turn strengthens food security
                                        Helping farmers to identify the disease quickly and helping them to find the right way to treat the disease
                                        More awareness and attention to plants and their health is essential to ensure a better life for many. Each of you can help keep our plants healthy and our food secure
                                        </p>
                                    <p>Plants make up more than 80% of the human diet. As a result, they're critical for food security, or ensuring that we all have access to enough, cheap, secure, and nutritious food to live active and healthy lives. Plant pests and diseases are a danger to food security because they can harm crops, reducing food availability and access while also raising food prices.
                                        </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-quality">
                                    <h4>OUR TEAM</h4>
                                    <p>We are from CAP0091 Bangkit 2021 Capstone Team. We are consist from 2 Android Developer team, 2 Machine Learning team, and 2 Cloud Computing Team.</p>
                                    <ul>
                                        <li><i className="fa fa-check-circle-o"></i>A2842630 - Nino Fachrurozy</li>
                                        <li><i className="fa fa-check-circle-o"></i>A0040244 - Eldhian Bimantaka Christianto</li>
                                        <li><i className="fa fa-check-circle-o"></i>C1801846 - Sablina Damayanti</li>
                                        <li><i className="fa fa-check-circle-o"></i>C1031406 - Geraldhi Aditya Putra Mahayadnya</li>
                                        <li><i className="fa fa-check-circle-o"></i>M0040333 - Dympna Tinezsia Adhisti</li>
                                        <li><i className="fa fa-check-circle-o"></i>M0040318 - Mpu Hambyah Syah Bagaskara Aji</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutUs;