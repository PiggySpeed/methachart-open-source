'use strict';
import React, { PropTypes } from 'react';


export const ViewRow = ({ children, style, className, display, justify, align, flex, width, height, onBlur }) => {
  const newStyle = {
    display:            display || 'flex',
    flexFlow:           'row',
    justifyContent:     justify || 'center',
    alignItems:         align || 'center',
    flex:               flex || 1,
    width:              width || 'auto',
    height:             height || 'auto',
    ...style
  };
  return (
    <div style={newStyle} className={className || ''} onBlur={onBlur}>
      {children}
    </div>
  )
};
ViewRow.propTypes = {
  children:             PropTypes.node,
  className:            PropTypes.string,
  display:              PropTypes.oneOf(['flex', 'none']),
  justify:              PropTypes.oneOf(['center', 'space-between', 'space-around', 'flex-start', 'flex-end']),
  align:                PropTypes.oneOf(['center', 'stretch', 'flex-start', 'flex-end']),
  flex:                 PropTypes.oneOf([1, 'none']),
  width:                PropTypes.string,
  height:               PropTypes.string,
  onBlur:               PropTypes.func
};


export const ViewCol = ({ children, style, className, display, justify, align, flex, width, height, onBlur }) => {
  const newStyle = {
    display:            display || 'flex',
    flexFlow:           'column',
    justifyContent:     justify || 'center',
    alignItems:         align || 'center',
    flex:               flex || 1,
    width:              width || 'auto',
    height:             height || 'auto',
    ...style
  };
  return (
    <div style={newStyle} className={className || ''} onBlur={onBlur}>
      {children}
    </div>
  )
};
ViewCol.propTypes = {
  children:             PropTypes.node,
  className:            PropTypes.string,
  display:              PropTypes.oneOf(['flex', 'none']),
  justify:              PropTypes.oneOf(['center', 'space-between', 'space-around', 'flex-start', 'flex-end']),
  align:                PropTypes.oneOf(['center', 'stretch', 'flex-start', 'flex-end']),
  flex:                 PropTypes.oneOf([1, 'none']),
  width:                PropTypes.string,
  height:               PropTypes.string,
  onBlur:               PropTypes.func
};
