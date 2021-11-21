import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Photos from './pages/Photos';
import Donate from './pages/Donate';
import Merchandise from './pages/Merchandise';
import Team from './pages/Team';
import './App.css';
import Navigation from './components/Navigation';

const App = () => {
  return (    
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/aboutus' component={AboutUs}/>
        <Route exact path='/contactus' component={ContactUs}/>
        <Route exact path='/photos' component={Photos}/>
        <Route exact path='/donate' component={Donate}/>
        <Route exact path='/merchandise' component={Merchandise}/>
        <Route exact path='/team' component={Team}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
