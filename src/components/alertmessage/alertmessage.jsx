'use strict';
import './alertmessage.less';
import React from 'react';
import { connect } from 'react-redux';

class AlertMessage extends React.Component {
  render() {
    return(
      <section className="alert-message-container">
        <h4 className="alert-message-text" >Feature is Not Ready</h4>
      </section>
    );
  }
}

export default AlertMessage;