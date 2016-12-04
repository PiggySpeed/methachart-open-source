'use strict';
import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionPrint from 'material-ui/svg-icons/action/print';
import RaisedButton from 'material-ui/RaisedButton';
import { ViewRow } from '../';

const style = {
  container: {
    height: '50px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #B6B6B6'
  },
  print: {
    marginRight: '10px'
  }
};

const Footer = ({ changeRoute,  onPrintClick }) => (
  <ViewRow style={style.container} flex='none' justify='space-between'>

    <span>
      <IconButton onClick={() => changeRoute("/")} tooltip="Home" tooltipPosition="top-right">
        <ActionHome />
      </IconButton>
      <IconButton onClick={() => changeRoute("/about")} tooltip="About" tooltipPosition="top-right">
        <ActionInfo />
      </IconButton>
    </span>

    <RaisedButton
      style={style.print}
      onClick={onPrintClick}
      label="PRINT"
      backgroundColor="#212121"
      labelColor="#FFFFFF" />

  </ViewRow>
);
Footer.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  onPrintClick: PropTypes.func.isRequired
};

export default Footer;