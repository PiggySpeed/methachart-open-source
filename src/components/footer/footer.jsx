'use strict';
import './footer.less';
import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionPrint from 'material-ui/svg-icons/action/print';
import RaisedButton from 'material-ui/RaisedButton';

import PrintPage, { printDocument } from 'modules/print/print.jsx';
import openWindow from 'shared/utils/newwindow';
import { PRINT_URL } from 'shared/utils/url';

const style = {
  position: 'relative',
  margin: 12,
  float: 'right'
};

const Footer = ({ changeRoute, logdata }) => (
  <footer className="footer-container">
    <IconButton onClick={() => changeRoute("/")} tooltip="Home" tooltipPosition="top-right">
      <ActionHome />
    </IconButton>
    <IconButton onClick={() => changeRoute("/settings")} tooltip="Settings" tooltipPosition="top-right">
      <ActionSettings />
    </IconButton>
    <IconButton onClick={() => changeRoute("/about")} tooltip="About" tooltipPosition="top-right">
      <ActionInfo />
    </IconButton>
    <IconButton onClick={() => changeRoute("/print")} tooltip="Print" tooltipPosition="top-right">
      <ActionPrint />
    </IconButton>
    <RaisedButton onClick={() => openWindow(PRINT_URL, logdata)} label="PRINT" style={style} backgroundColor="#FF5722" labelColor="#FFFFFF" />
  </footer>
);

export default Footer;