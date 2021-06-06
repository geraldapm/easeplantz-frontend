import React, { Component } from 'react';

class Video extends Component {
    state = {  }
    render() { 
        return (
            <section className="video-section set-bg" style={{ backgroundImage: "url('assets/img/home-about.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-text">
                                <h2>Watch Our Profile Video</h2>
                                <a href="https://www.youtube.com/watch?v=X_9VoqR5ojM" className="play-btn video-popup">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Video;