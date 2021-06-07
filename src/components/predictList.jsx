import React, { Component } from 'react';
import axios from 'axios';
import host from './host';

class PredictList extends Component {
    state = { 
        files: [
            {
                disease: 'Early Blight',
                prediction: '95.122',
                url: 'assets/img/blog/blog-1.jpg',
            },
        ],
    }
    
    componentDidMount(){
        if (this.props.model) {
            axios.get(`${host}?model=${this.props.model}`)
            .then(res => {
            const data = res.data;
            const {files} = data.data;
            console.log(files);
            this.setState({ files });
            })   
        } else {
            axios.get(`${host}`)
            .then(res => {
            const data = res.data;
            console.log(data);
            const {files} = data.data;
            console.log(files);
            if (this.props.limit) {
                files.splice(this.props.limit, files.length);
            }

            this.setState({ files });
            })   
        }
    }

    render() {
        const {files} = this.state;
        return (
            <section className="blog-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>History</h2>
                                <p>List of all predicted plants and their diseases.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-gird">
                        <div className="grid-sizer"></div>
                        {files.map(file => (
                            <div key={file.url} className="col-lg-4 col-md-6 grid-item">
                                <div className="blog-item large-item set-bg" style={{ backgroundImage: "url("+file.url+")"}}>
                                    <a href={file.url} className="blog-text">
                                        <h5>{file.disease}</h5>
                                        <div className="categories">{file.prediction + '%'}</div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PredictList;