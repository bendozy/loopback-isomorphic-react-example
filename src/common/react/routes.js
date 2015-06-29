import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';
import Home from 'components/Home';
import CoffeeShops from 'components/CoffeeShops';
import Reviews from 'components/Reviews';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route handler={AppContainer}>
    <Route path='coffeeshops' handler={CoffeeShops} />
    <Route path='reviews' handler={Reviews} />
    <DefaultRoute handler={Home} />
  </Route>
);

export default routes;
