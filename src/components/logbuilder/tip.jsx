'use strict';
import React from 'react';

const styles = {
  container: {
    position: 'relative',
    float: 'right',
    height: '20px',
    padding: '2px',
    marginTop: '36px',
    marginRight: '24px'
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