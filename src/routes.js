import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import SecureLanding from './components/Landing/SecureLanding';
import SecureFavorites from './components/Favorites/SecureFavorites';
import SecurePayment from './components/Payment/SecurePayment';
import SecureComments from './components/Comments/SecureComments'

export default (
  <Switch>
    <Route exact path="/" component={Home} /> 
    <Route path="/about" component={About} />
    <Route path="/favorites" component={SecureFavorites} />
    <Route path="/landing" component={SecureLanding} />
    <Route path="/payment" component={SecurePayment} />
    <Route path="/comments" component={SecureComments} />
    <Route path="*" render={() => <div>FourOhFour</div>} />
  </Switch>
);
