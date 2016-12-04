'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateSelectorActions from '../actions/dateselector';

import { ViewRow, DateField } from '../components';

const SupportText = ({ startdate, enddate, timeinterval, takehome }) => (
  <h6 style={{ margin: '2px 0 2px 5px', minWidth: '125px'}}>

    {startdate} {startdate && enddate ? " to " : ""} {enddate}

    <br/>

    { Number.isInteger(timeinterval) && timeinterval > 0
      ? timeinterval + " days"
      : ""
    }

    {(takehome !== '0') && (takehome !== '') ? `Take home ${takehome} mL each day` : 'No take-home doses'}

  </h6>
);

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
      takehome,

      onSetStartDate,
      onSetEndDate,
      onSetTimeInterval
      } = this.props;

    return(
      <ViewRow width='100%' justify='flex-start'>

        <DateField onDateBlur={onSetStartDate} label="Start"/>
        <DateField onDateBlur={onSetEndDate} label="End"/>

        <SupportText
          startdate={startdate}
          enddate={enddate}
          timeinterval={timeinterval}
          takehome={takehome}
        />

      </ViewRow>
    );
  }
}
DateSelectorWrapper.propTypes = {
  startdate:              PropTypes.string.isRequired,
  enddate:                PropTypes.string.isRequired,
  timeinterval:           PropTypes.number.isRequired,
  takehome:               PropTypes.string.isRequired,

  onSetStartDate:         PropTypes.func.isRequired,
  onSetEndDate:           PropTypes.func.isRequired,
  onSetTimeInterval:      PropTypes.func.isRequired
};

const mapStateToProps = ({dates, LogBuilder}) => {
  return {
    startdate:          dates.startdate,
    enddate:            dates.enddate,
    timeinterval:       dates.timeinterval,
    takehome:           LogBuilder.takehome
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...dateSelectorActions}, dispatch)
};
const DateSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(DateSelectorWrapper);
export default DateSelectorContainer;