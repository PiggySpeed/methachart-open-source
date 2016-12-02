'use strict';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from '../reducers';
import {
  MainContainer,
  AboutContainer,
  LogBuilderContainer,
  PrintContainer
} from '../containers';

// Material UI Theme Provider
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';

export const redirect = (to) => {
  hashHistory.push(to);
};

const routes = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
          <IndexRoute component={LogBuilderContainer}/>
          <Route path="/about" component={AboutContainer}/>
          <Route path="/print" component={PrintContainer}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default routes;
