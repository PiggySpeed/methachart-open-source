'use strict';
import '../styles/index.less';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../config/routes.jsx';
import { bindActionCreators } from 'redux';
import * as printActions from '../actions/print';

import { LogBuilderContainer } from './';
import { ViewCol, Header, Footer } from '../components';

const MainWrapper = ({ children, onPrintRequest }) => (
  <ViewCol width='100vw' height='100vh' >

    <Header title='MethaChart Log Builder'/>

    { children || <LogBuilderContainer /> }

    <Footer changeRoute={redirect} onPrintClick={onPrintRequest} />

  </ViewCol>
);

const mapStateToProps = (state) => {
  return {}
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...printActions}, dispatch)
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
export default MainContainer;