import React, { Component } from 'react';
import { post } from 'axios';
import PredictList from './predictList';

class UploadPrediction extends Component {
    
  constructor(props) {
    super(props);
    this.state ={
        status: 'waiting',
        disease: 'Late blight',
        prediction: '75.234%',
        url: 'assets/img/blog/blog-1.jpg',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      this.setState({
          status: response.data.status,
          disease: response.data.disease,
          url: response.data.url,
          prediction: response.data.prediction,
      })
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://localhost:5000/upload?model=' + this.props.model;
    const formData = new FormData();
    formData.append('predict-img',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }
    render() { 
        if (this.state.status === 'success') {
            return (
                <section className="blog-single-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div class="recent-news">
                            <h4>Prediction Success</h4>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="recent-item set-bg" style={{ backgroundImage: "url("+this.state.url+")"}}>
                                        <a href={this.state.url} class="recent-text">
                                            <div class="categories">{this.state.prediction + '%'}</div>
                                            <h5>{this.state.disease}</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="leave-comment-form">
                                <h4>Upload Image</h4>
                                <p>Please upload your image in .jpg format (any other format will be not supported).</p>
                                <form action="#" onSubmit={this.onFormSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="file" onChange={this.onChange} placeholder="choose yout image"/>
                                            <button type="submit" className="leave-btn">Predict!</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        } else {

        return (
            <>
            <section className="blog-single-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="leave-comment-form">
                            <h4>Upload Image</h4>
                            <p>Please upload your image in .jpg format (any other format will be not supported).</p>
                            <form action="#" onSubmit={this.onFormSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="file" onChange={this.onChange} placeholder="choose yout image"/>
                                        <button type="submit" className="leave-btn">Predict!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PredictList model={this.props.model}/>
        </>
        );
        }
    }
}
 
export default UploadPrediction;