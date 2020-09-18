import React, {useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth} from "./firebase";
import { useStateValue} from "./Stateprovider";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise= loadStripe('pk_test_51HSpKZCbY9RZIt8DM3P1wq3CfpFVbeHYj39CHInEgHD8pUdV2ssmyB9gTnbBvxKvKjuYINHbt9B13f268IhSxUmv003EwXLAPg');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {


    // Will only run one when app component loads
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
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
         <Route path="/payment">
         <Header/>
         <Elements stripe={promise}>
          <Payment/>
         </Elements>
          
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
