'use strict';
import './titlebar.less';
import React, { PropTypes } from 'react';
import applyWindowFunctions from './window-utils';
const winFunc = applyWindowFunctions();

import { ViewRow } from '../';

const style = {
  text: {
    fontWeight: 500,
    color: '#FFFFFF',
    marginLeft: '5px'
  },
  header: {
    appRegion: 'drag'
  }
};

const TitleBar = () => (
  <header className='titlebar'>

    <ViewRow className='draggable' style={{ justifyContent: 'flex-start' }}>
      <img src='resources/methachart-icon.png' width='25px'/>
      <h3 style={style.text}>MethaChart v.1.3.1</h3>
    </ViewRow>

    <span className='topnav-container'>
      <button
        onClick={winFunc.close}
        id="close-btn"
        className="topnav-button topnav-button-close">
        <img src="resources/close_lightgrey.png" width="8" height="8"/>
      </button>

      <button
        onClick={winFunc.maximize}
        id="max-btn"
        className="topnav-button">
        <img src="resources/maximize_lightgrey.png" width="8" height="8"/>
      </button>

      <button
        onClick={winFunc.minimize}
        id="min-btn"
        className="topnav-button">
        <img src="resources/minimize_lightgrey.png" width="8" height="8"/>
      </button>
      </span>

  </header>
);
TitleBar.propTypes = {
};

export default TitleBar;