import React from "react";
import "./App.css";
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import LoginPage from './LoginPage';
import Checkout from './Checkout';
export default function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
  
    <Route path="/checkout">
    <Header />
    <Checkout />
    
    </Route>

    {/*login page */}
    <Route path="/login">
   <LoginPage />
    </Route>

{/*home page */}
    <Route path="/">
    <Header/>
     <Home />
    </Route>

    </Switch>
    
    </div>
    </Router>
  );
}
