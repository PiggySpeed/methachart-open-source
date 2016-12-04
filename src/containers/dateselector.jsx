'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateSelectorActions from '../actions/dateselector';

import { ViewRow, DateField } from '../components';

class DateSelectorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDatesValid: false,
      startdateValid: false,
      enddateValid: false
    };
    this.onBlur = this.onBlur.bind(this);
  }
  onBlur() {
    return this.props.onSetTimeInterval(this.props.startdate, this.props.enddate, this.props.maxinterval);
  }
  get timeInterval(){
    if(!!this.props.startdate && !!this.props.enddate){
      return null
    }
  }
  render() {
    const {
      startdate,
      enddate,
      timeinterval,

      onSetStartDate,
      onSetEndDate,
      onSetTimeInterval
      } = this.props;

    return(
      <ViewRow width='100%' justify='flex-start'>

        <DateField onDateBlur={onSetStartDate} label="Start"/>
        <DateField onDateBlur={onSetEndDate} label="End"/>

        <h6 className="dateinterval-text">
          {startdate}
          {startdate && enddate ? " to " : ""}
          {enddate}<br/>{ Number.isInteger(timeinterval) && timeinterval>0
          ? timeinterval + " days"
          : "" }
        </h6>

      </ViewRow>
    );
  }
}
DateSelectorWrapper.propTypes = {
  startdate:             PropTypes.string.isRequired,
  enddate:               PropTypes.string.isRequired,
  timeinterval:          PropTypes.number.isRequired,

  onSetStartDate:        PropTypes.func.isRequired,
  onSetEndDate:          PropTypes.func.isRequired,
  onSetTimeInterval:     PropTypes.func.isRequired
};

const mapStateToProps = ({dates}) => {
  return {
    startdate:          dates.startdate,
    enddate:            dates.enddate,
    timeinterval:       dates.timeinterval
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...dateSelectorActions}, dispatch)
};
const DateSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(DateSelectorWrapper);
export default DateSelectorContainer;