'use strict';
import { connect } from 'react-redux';
import { Print } from '../components';

const mapStateToProps = (state) => {
  return {
    logdata: state.LogBuilder.get("logdata")
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const PrintContainer = connect(mapStateToProps, mapDispatchToProps)(Print);
export default PrintContainer;