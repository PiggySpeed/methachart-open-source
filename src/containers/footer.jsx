'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../config/routes.jsx';
import { bindActionCreators } from 'redux';
import * as printActions from '../actions/print';

import { Footer } from '../components';

class FooterWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorDateText: ''
    };
  }
  componentWillReceiveProps(nextProps){
    this.deleteErrorText(nextProps);
  }
  deleteErrorText(props){
    props.printErrorText !== ''
      ? setTimeout(() => this.props.onDeletePrintError(), 3000 )
      : null
  }
  render() {
    const {
      printErrorText,
      onPrintRequest,
      onDeletePrintError
    } = this.props;

    return(
      <Footer
        printErrorText={printErrorText}
        changeRoute={redirect}
        onPrintClick={onPrintRequest}
        onDeletePrintError={onDeletePrintError}
      />
    );
  }
}
FooterWrapper.propTypes = {
  printErrorText: PropTypes.string.isRequired,
  onPrintRequest: PropTypes.func.isRequired,
  onDeletePrintError: PropTypes.func.isRequired
};

const mapStateToProps = ({printData}) => {
  return {
    printErrorText: printData.errorText
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...printActions}, dispatch)
};
const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(FooterWrapper);
export default FooterContainer;