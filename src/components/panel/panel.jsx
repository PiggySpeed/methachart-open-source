import React, { Component, PropTypes } from 'react';
import { ViewRow } from '../';

const containerStyle = {
  flex: 'none',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  height: 75,
  width: '100%'
};

export default class Panel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;

    return (
      <ViewRow style={{...containerStyle, ...style}}>
        { children }
      </ViewRow>
    )
  }
}

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

// TODO: turn into a connected component that handles all error states
