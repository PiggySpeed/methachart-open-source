'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../config/routes.jsx';

import { LogBuilderContainer } from './';
import Navigation from 'components/navigation/navigation.jsx';
import NavigationButton from 'components/navigation/navigationbutton.jsx';
import Footer from 'components/footer/footer.jsx';
import { ViewCol } from '../components';

class MainWrapper extends Component {
  constructor(props){
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
  }
  changeRoute(routeURL) {
    redirect(routeURL)
  }
  render() {
    const { children, printdata } = this.props;
    return(
      <ViewCol>
        { children || <LogBuilderContainer /> }
        <Footer changeRoute={this.changeRoute} printData={printdata} />
      </ViewCol>
    );
  }
}

const mapStateToProps = ({LogBuilder}) => {
  return {
    printdata: {
      headerdata: {
        name:         LogBuilder.get('name'),
        startdate:    LogBuilder.get('startdate'),
        enddate:      LogBuilder.get('enddate'),
        timeinterval: LogBuilder.get('timeinterval')
      },
      logdata:        LogBuilder.get('logdata').toArray()
    }
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
export default MainContainer;