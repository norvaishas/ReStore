import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

const App = () => {
    return (
      <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/cart" component={CartPage}/>
      </Switch>
    );
};

export default App;
