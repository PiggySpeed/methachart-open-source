'use strict';
import './navigation.less';
import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <navigation className="navigation-container">
        {this.props.children}
      </navigation>
    );
  }
}

export default Navigation;