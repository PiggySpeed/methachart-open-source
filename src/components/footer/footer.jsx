'use strict';
import './footer.less';
import React, { PropTypes } from 'react';
import openWindow from 'shared/utils/newwindow';
import { PRINT_URL } from 'shared/utils/url';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionPrint from 'material-ui/svg-icons/action/print';
import RaisedButton from 'material-ui/RaisedButton';
import { ViewRow } from '../';
import { Print } from '../';

const style = {
  container: {
    height: '50px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #B6B6B6',
    width: '100%'
  },
  print: {
    position: 'relative',
    margin: 12,
    float: 'right'
  }
};

const Footer = ({ changeRoute, printData }) => (
  <ViewRow style={style.container} flex='none' justify='space-between' >

    <span>
      <IconButton onClick={() => changeRoute("/")} tooltip="Home" tooltipPosition="top-right">
        <ActionHome />
      </IconButton>
      <IconButton onClick={() => changeRoute("/about")} tooltip="About" tooltipPosition="top-right">
        <ActionInfo />
      </IconButton>
    </span>

    <RaisedButton
      onClick={() => { openWindow(PRINT_URL, printData) }}
      label="PRINT" style={style.print}
      backgroundColor="#727272"
      labelColor="#FFFFFF" />

  </ViewRow>
);
Footer.propTypes = {
  printData: PropTypes.object,
  changeRoute: PropTypes.func.isRequired,
};

export default Footer;