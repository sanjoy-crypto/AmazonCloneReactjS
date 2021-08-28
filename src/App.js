import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import OrderComplete from './OrderComplete';
import Footer from './Footer';

const promise = loadStripe(
  'pk_test_51JSFoCGFyOgsuv9nd3K6FnIqEL57szFhV9mdvucTrsYKPs8fJ5wusMZBUR4fn18yswXWq5b4I5b4m0TNGFgRO7W100bnqmnTnG'
)

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <div className="app">


      <Router>

        <Switch>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/checkout" exact>
            <Header />
            <Checkout />
            {/* <Footer /> */}
          </Route>

          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <Footer /> */}
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
            {/* <Footer /> */}
          </Route>
          <Route path="/order_complete" exact>
            <OrderComplete />
          </Route>

        </Switch>

      </Router>




    </div>
  );
}

export default App;
