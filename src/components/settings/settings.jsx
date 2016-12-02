'use strict';
import React from 'react';
import TextField from 'material-ui/TextField';
import { ViewCol } from '../';

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

const Settings = () => (
  <ViewCol>
    <h1>Settings</h1>
    <TextField
      style={styles.printerfieldinput}
      hintStyle={styles.hintstyle}
      hintText="printer path..."
    />
  </ViewCol>
);

export default Settings;