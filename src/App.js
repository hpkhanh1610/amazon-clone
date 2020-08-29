import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <h1>Login page</h1>
          </Route>
          {/* This is the default route, if we type /blabla, no matching => / */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* REACT Router */}

      {/* localhost.com/ */}
      {/* localhost.com/login */}