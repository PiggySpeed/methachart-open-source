'use strict';
import '../styles/index.less';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../config/routes.jsx';

import { LogBuilderContainer, FooterContainer } from './';
import { ViewCol, TitleBar } from '../components';

class MainWrapper extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ViewCol style={{ border: '1px solid #727272', borderTop: 'none', width: '100vw', height: '100vh' }}>

        <TitleBar />

        <div style={{display: 'flex', flex: 1, overflowY: 'auto', width: '100%', height: '100%'}}>
          { this.props.children || <LogBuilderContainer /> }
        </div>

        <FooterContainer />

      </ViewCol>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
export default MainContainer;