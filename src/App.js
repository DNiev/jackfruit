import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navigation from './components/NavBar';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/aboutus' component={AboutUs}/>
        <Route exact path='/contactus' component={ContactUs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
