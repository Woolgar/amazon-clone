import React, {useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth} from "./firebase";

function App() {

  useEffect(() => {
    // Will only run one when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ', authUser);

      if (authUser) {
        
      }
    })
  }, [])

  return (
    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/login">
          <Login />
         </Route>
      <Route path="/checkout">
        <Header/>
          <Checkout />
         </Route>
         <Route path="/">
         <Header/>
          <Home />
         </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
