import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import HeroSlide from './components/heroSlide';
import About from './components/about';
import Feature from './components/feature';
import Choseus from './components/choseus';
import Video from './components/video';
import PredictList from './components/predictList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <HeroSlide/>
        <About/>
        <Feature/>
        <Choseus/>
        <Video/>
        <PredictList/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
