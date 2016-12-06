'use strict';
import React, { Component, PropTypes } from 'react';
import { ViewRow } from '../';

class SupportText extends Component {
  constructor(props){
    super(props);
  }
  get dateRangeText() {
    return this.props.errorDateText
      ? this.props.errorDateText
      : `${this.props.startdate} ${this.props.startdate && this.props.enddate ? ' to ' : ''} ${this.props.enddate || ''}`;
  }
  get timeIntervalText() {
    return Number.isInteger(this.props.timeinterval) && (this.props.timeinterval > 0)
      ? `(${this.props.timeinterval} days)`
      : '';
  }
  render() {
    console.log(this.props.timeinterval);

    return(
      <h6 style={{ margin: '2px 0 2px 5px', minWidth: '125px'}}>

        {`${this.dateRangeText} ${this.timeIntervalText}`}

        <br/>

        {this.props.takehome ? `Take home ${this.props.takehome} mL each day` : 'No take-home doses'}

      </h6>
    );
  }
}
SupportText.propTypes = {
  startdate:            PropTypes.string.isRequired,
  enddate:              PropTypes.string.isRequired,
  errorDateText:        PropTypes.string.isRequired,
  timeinterval:         PropTypes.number.isRequired,
  takehome:             PropTypes.number.isRequired
};

export default SupportText;