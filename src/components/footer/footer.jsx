'use strict';
import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
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

const Footer = ({ printErrorText, changeRoute, onPrintClick }) => (
  <ViewRow style={style.container} flex='none' justify='space-between'>

    <span>
      <IconButton onClick={() => changeRoute("/")} tooltip="Log Builder" tooltipPosition="top-right">
        <ActionViewList />
      </IconButton>
      <IconButton onClick={() => changeRoute("/about")} tooltip="About" tooltipPosition="top-right">
        <ActionInfo />
      </IconButton>
    </span>

    <h4 style={{ color: '#f41d1b'}} className='fade-in-out-opacity'>{printErrorText}</h4>

    <RaisedButton
      style={style.print}
      onClick={onPrintClick}
      label="PRINT"
      backgroundColor="#212121"
      labelColor="#FFFFFF" />

  </ViewRow>
);
Footer.propTypes = {
  printErrorText: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
  onPrintClick: PropTypes.func.isRequired
};

export default Footer;