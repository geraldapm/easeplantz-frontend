import React, { Component } from 'react';

class Choseus extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="chooseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Why Using Easeplantz</h2>
                                <p>Here are the reasons why you should use Easeplantz to predict plant diseases</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="choose-item">
                                <h5>Instant Prediction</h5>
                                <p>Only using camera, you can predict the diseases in an instant. With our app you can predict three plants: corn, potato, and tomato.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="choose-item">
                                <h5>Recommendations</h5>
                                <p>Get a recommendations about treating your plant diseases by using our App. Our recommendations is verified by plant experts.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="choose-item">
                                <h5>Mobile and Web platform</h5>
                                <p>You can predict the plants everywhere and anywhere with our multi-platform app. Easeplantz supports Android and Web platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Choseus;