'use strict';
import './configurespecific.less';
import React from 'react';
import { connect } from 'react-redux';

const ConfigureSpecificContainer = ({ }) => (
  <section>
    <h2>doses by day</h2>
  </section>
);
const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const ConfigureSpecificPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureSpecificContainer);
export default ConfigureSpecificPage;