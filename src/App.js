import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import LoginPage from './LoginPage';
import Payment from "./Payment";
import Order from "./Order";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from './Checkout';


const promise = loadStripe(
  "pk_test_51ItAJ3SCvcRdNxPbJn9wm7IoiPCi3orGYOxmBmcNv7TrTiKI4eAV3mCRJepd2LmnO1MQu8G5pKnk2ULmPyfqghW200kBvpcGva"
);

export default function App() {

const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

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

     <Route path="/order">
            <Header />
            <Order />
          </Route>

         <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

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
