'use strict';
import './settings.less';
import React from 'react';
import { connect } from 'react-redux';

const SettingsPageContainer = ({ }) => (
  <article>
    <h1>Settings</h1>
  </article>
);
const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const SettingsPage = connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer);
export default SettingsPage;