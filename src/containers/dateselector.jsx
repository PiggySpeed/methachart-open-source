'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dateSelectorActions from '../actions/dateselector';

import { ViewRow, DateField, SupportText } from '../components';

class DateSelectorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorDateText: ''
    };
    this.onBlur = this.onBlur.bind(this);
    this.onInvalidDate = this.onInvalidDate.bind(this);
  }
  get timeInterval(){
    if(!!this.props.startdate && !!this.props.enddate){
      return null
    }
  }
  onBlur() {
    return this.props.onSetTimeInterval(this.props.startdate, this.props.enddate, this.props.maxinterval);
  }
  onInvalidDate(err) {
    this.setState({ errorDateText: err });
  }
  render() {
    const {
      startdate,
      enddate,
      timeinterval,
      takehome,

      onSetStartDate,
      onSetEndDate
      } = this.props;

    return(
      <ViewRow width='100%' justify='flex-start'>

        <DateField
          label='Start'
          onDateBlur={onSetStartDate}
          onInvalidDate={this.onInvalidDate}
        />
        <DateField
          label='End'
          onDateBlur={onSetEndDate}
          onInvalidDate={this.onInvalidDate}
        />

        <SupportText
          startdate={startdate}
          enddate={enddate}
          errorDateText={this.state.errorDateText}
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
  takehome:               PropTypes.number.isRequired,

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