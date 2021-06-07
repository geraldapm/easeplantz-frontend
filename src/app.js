import React from 'react';
import {useLocation, BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HeroSlide from './components/heroSlide';
import About from './components/about';
import Feature from './components/feature';
import Choseus from './components/choseus';
import Video from './components/video';
import PredictList from './components/predictList';
import BreadCrumb from './components/breadcrumb';
import AboutUs from './components/aboutUs';
import OurTeam from './components/ourTeam';

class DebugRouter extends BrowserRouter {
    constructor(props){
      super(props);
      console.log('initial history is: ', JSON.stringify(this.history, null,2))
      this.history.listen((location, action)=>{
        console.log(
          `The current URL is ${location.pathname}${location.search}${location.hash}`
        )
        console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
      });
    }
  }

function Prediction() {
  const { search } = useLocation();
  const match = search.match(/model=(.*)/);
  const model = match?.[1];
  return (
    <>
      {model === 'corn' && 
      <>
        <Header type="header-normal"/>
        <BreadCrumb title="Corn Predictions"/>
        <Feature/>
        <PredictList model='corn'/>
      </>}
      {model === 'potato' && 
      <>
        <Header type="header-normal"/>
        <BreadCrumb title="Potato Predictions"/>
        <Feature/>
        <PredictList model='potato'/>
      </>}
      {model === 'tomato' && 
      <>
        <Header type="header-normal"/>
        <BreadCrumb title="Tomato Predictions"/>
        <Feature/>
        <PredictList model='tomato'/>
      </>}
      {model === undefined && 
      <>
        <Header type="header-normal"/>
        <BreadCrumb title="Predictions"/>
        <Feature/>
        <PredictList/>
      </>}
    </>
  );
}

function App() {
  return (
        <DebugRouter>
              <div id="preloder">
                    <div className="loader"> 	<img  src="assets/img/ease-logo.png" alt=""/>  </div>
                    <div className="loader2"> 	<img  src="assets/img/ease-type.png" alt=""/>  </div>
              </div>
            <Switch>
                <Route exact path="/" name="Home">
                    <Header/>
                    <HeroSlide/>
                    <About/>
                    <Feature title="PREDICTIONS"/>
                    <Choseus/>
                    <Video/>
                    <PredictList/>
                </Route>
                <Route path="/about" name="About Us">
                    <Header type="header-normal"/>
                    <BreadCrumb title="About Us"/>
                    <AboutUs/>
                    <OurTeam/>
                </Route>
                <Route path="/prediction" name="Prediction">
                    <Prediction/>
                </Route>
            </Switch>
            <Footer/>
      </DebugRouter>
  );
}

export default App;