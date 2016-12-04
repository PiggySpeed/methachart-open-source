'use strict';
import React, { PropTypes } from 'react';

import { ViewRow, Print } from '../';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '100%',
    backgroundColor: "#212121",
    borderBottom: '2px solid #F41D1B'
  },
  text: {
    fontWeight: 500,
    color: '#FFFFFF'
  }
};

const Header = ({ title }) => (
  <header style={style.container}>
    <h4 style={style.text}>{title}</h4>
  </header>
);
Header.propTypes = {
  title: PropTypes.string
};

export default Header;