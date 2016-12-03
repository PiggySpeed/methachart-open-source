'use strict';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  name: {
    width: 200,
    marginLeft: 25,
    marginBottom: 10
  }
};

const NameInput = ({onBlur}) => (
  <TextField
    onBlur={(e) => onBlur(e.target.value)}
    style={styles.name}
    hintText="e.g. Lee, John"
    floatingLabelText="Name"
  />
);
NameInput.propTypes = {
  onBlur:       PropTypes.func.isRequired
};

export default NameInput;