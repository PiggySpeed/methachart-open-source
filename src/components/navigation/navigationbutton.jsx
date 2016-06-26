'use strict';
import './navigation.less';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NavigationButton = ({ path, text }) => (
  <Link to={path} className="navigation-button-container">
    {text}
  </Link>
);

NavigationButton.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavigationButton;
