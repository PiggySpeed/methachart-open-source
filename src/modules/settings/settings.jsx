'use strict';
import './settings.less';
import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';

const styles = {
  printerfieldinput: {
    position: 'relative',
    float: 'left',
    width: 200,
    margin: "0px 4px"
  },
  hintstyle: {
    padding: "0px 3px",
    margin: 0
  }
};

const SettingsPageContainer = ({ }) => (
  <article>
    <h1>Settings</h1>
    <TextField
      style={styles.printerfieldinput}
      hintStyle={styles.hintstyle}
      hintText="printer path..."
    />

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