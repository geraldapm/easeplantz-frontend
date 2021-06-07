import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Feature extends Component {
    state = { 
        features: [
            {
                title: 'CORN',
                desc: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.',
                model: 'corn',
                img: 'assets/img/feature/feature-1.jpg',
            },
            {
                title: 'POTATO',
                desc: 'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae. Wild potato species, originating in modern-day Peru, can be found throughout the Americas, from Canada to southern Chile.',
                model: 'potato',
                img: 'assets/img/feature/feature-2.jpg',
            },
            {
                title: 'TOMATO',
                desc: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.',
                model: 'tomato',
                img: 'assets/img/feature/feature-3.jpg',
            },
        ]
     }
    render() { 
        const {features} = this.state;
        return ( 
            <section className="feature-section">
                <div className="class-title set-bg" style={{ backgroundImage: "url('assets/img/classes-title-bg.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto text-center">
                                <div className="section-title pl-lg-4 pr-lg-4 pl-0 pr-0">
                                    <h2>{this.props.title || ""}</h2>
                                    <p>Predict your plants now with Machine Learning technology! List of plants ready to predict is listed below:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {features.map(feature => (
                            <div key={feature.model} className="col-md-4">
                                <div className="feature-item set-bg" style={{ backgroundImage: "url("+feature.img+")"}}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                    <Link to={"/prediction?model=" + feature.model} className="primary-btn f-btn">Predict</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> 
         );
    }
}
 
export default Feature;