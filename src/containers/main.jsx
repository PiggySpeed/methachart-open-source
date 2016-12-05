'use strict';
import '../styles/index.less';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../config/routes.jsx';
import { bindActionCreators } from 'redux';
import * as printActions from '../actions/print';

import { LogBuilderContainer } from './';
import { ViewCol, TitleBar, Footer } from '../components';

class MainWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorText: this.props.printErrorText
    };
    this.showErrorText = this.showErrorText.bind(this);
  }
  showErrorText(){
    setTimeout( () => this.setState({ errorText: '' }), 4000 )
  }
  render() {
    const {
      children,
      onPrintRequest
    } = this.props;

    this.props.printErrorText !== ''
      ? this.showErrorText()
      : null;

    return (
      <ViewCol width='100vw' height='100vh'>

        <TitleBar />

        <div style={{display: 'flex', flex: 1, overflowY: 'auto', width: '100vw'}}>
          { children || <LogBuilderContainer /> }
        </div>

        <Footer changeRoute={redirect} onPrintClick={onPrintRequest} printErrorText={this.state.errorText}/>

      </ViewCol>
    )
  }
}

const mapStateToProps = ({printData}) => {
  return {
    printErrorText: printData.errorText
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...printActions}, dispatch)
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
export default MainContainer;