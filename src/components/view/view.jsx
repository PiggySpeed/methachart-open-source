'use strict';
import './viewport.less';
import React, { PropTypes } from 'react';


export const ViewportRow = ({ children, className, display, justify, align, flex }) => {
  const style = {
    display:            display || 'flex',
    flexFlow:           'row',
    justifyContent:     justify || 'center',
    alignItems:         align || 'center',
    flex:               flex || 1
  };
  return (
    <div style={style} className={className || ''}>
      {children}
    </div>
  )
};
ViewportRow.propTypes = {
  children:             PropTypes.node,
  className:            PropTypes.string,
  display:              PropTypes.oneOf(['flex', 'none']),
  justify:              PropTypes.oneOf(['center', 'space-between', 'space-around', 'flex-start', 'flex-end']),
  align:                PropTypes.oneOf(['center', 'stretch', 'flex-start', 'flex-end']),
  flex:                 PropTypes.oneOf([1, 'none'])
};


export const ViewportCol = ({ children, className, display, justify, align, flex }) => {
  const style = {
    display:            display || 'flex',
    flexFlow:           'column',
    justifyContent:     justify || 'center',
    alignItems:         align || 'center',
    flex:               flex || 1
  };
  return (
    <div style={style} className={className || ''}>
      {children}
    </div>
  )
};
ViewportCol.propTypes = {
  children:           PropTypes.node,
  className:          PropTypes.string,
  display:            PropTypes.oneOf(['flex', 'none']),
  justify:            PropTypes.oneOf(['center', 'space-between', 'space-around', 'flex-start', 'flex-end']),
  align:              PropTypes.oneOf(['center', 'stretch', 'flex-start', 'flex-end']),
  flex:               PropTypes.oneOf([1, 'none'])
};
