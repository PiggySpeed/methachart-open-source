'use strict';
import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    marginLeft: '50px',
    padding: '0'
  }
};

const Tip = () => (
  <h6 style={styles.container}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TAB = forward
    <br/>
    Shift+TAB = backwards
  </h6>
);

export default Tip;