import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Main Store
import store from 'mainstore/store';

// Pages
import MainPage from 'modules/main/main.jsx';
import AboutPage from 'modules/about/about.jsx';
import ChartPage from 'modules/chart/chart.jsx';
import SettingsPage from 'modules/settings/settings.jsx';
import PrintPage from 'modules/print/print.jsx';

// Material UI Theme Provider
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const routes = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
          <IndexRoute component={ChartPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/settings" component={SettingsPage}/>
          <Route path="/print" component={PrintPage}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default routes;
