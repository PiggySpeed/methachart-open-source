import React, { PropTypes } from 'react';


export const ViewRow = ({ children, style, className, onBlur }) => {
  const newStyle = {
    display:            'flex',
    flexFlow:           'row',
    justifyContent:     'center',
    alignItems:         'center',
    flex:               1,
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
  onBlur:               PropTypes.func
};


export const ViewCol = ({ children, style, className, onBlur }) => {
  const newStyle = {
    display:            'flex',
    flexFlow:           'column',
    justifyContent:     'center',
    alignItems:         'center',
    flex:               1,
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
  onBlur:               PropTypes.func
};
