import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Main Store
import store from 'mainstore/store';

// Pages
import MainPage from 'modules/main/main.jsx';
import AboutPage from 'modules/about/about.jsx';
import HomePage from 'modules/home/home.jsx';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </Route>
    </Router>
  </Provider>
);

export default routes;
