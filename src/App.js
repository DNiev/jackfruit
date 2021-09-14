import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='aboutus' component={AboutUs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
