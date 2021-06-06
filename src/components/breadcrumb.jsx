import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BreadCrumb extends Component {
    state = {  }
    render() { 
        return (
            <section className="breadcrumb-section set-bg spad" style={{ backgroundImage: "url('assets/img/about-bread.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>{this.props.title || "Page"}</h2>
                                <div className="breadcrumb-controls">
                                    <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                    <span>{(" "+this.props.title) || " Page"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default BreadCrumb;