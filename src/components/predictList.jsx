import React, { Component } from 'react';
class PredictList extends Component {
    state = { 
        files: [
            {
                disease: 'Early Blight',
                prediction: '95.122',
                url: 'assets/img/blog/blog-1.jpg',
            },
            {
                disease: 'Late Blight',
                prediction: '92.122',
                url: 'assets/img/blog/blog-2.jpg',
            },
            {
                disease: 'Common Rust',
                prediction: '91.122',
                url: 'assets/img/blog/blog-3.jpg',
            }
        ],
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
                            <div className="col-lg-4 col-md-6 grid-item">
                                <div className="blog-item large-item set-bg" style={{ backgroundImage: "url("+file.url+")"}}>
                                    <a href={file.url} className="blog-text">
                                        <div className="categories">{file.prediction}</div>
                                        <h5>{file.disease}</h5>
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