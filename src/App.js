import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import LoginPage from './LoginPage';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from './Checkout';
export default function App() {

const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


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
