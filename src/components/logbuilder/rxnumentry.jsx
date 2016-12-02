'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DrugPicker from '../drugpicker/drugpicker.jsx';
import DateSelector from '../dateselector/dateselector.jsx';
import CarriesSelector from '../carriesselector/carriesselector.jsx';

// Actions
import {
  onNameChange, onRxNumChange, onDrugBlur, onDoseChange, onBuildLog,
  onSetStartDate, onSetEndDate, onSetTimeInterval,
  } from 'modules/configurespecific/configurespecificactions';
import {
  onPickDrug, onSetDrug
  } from '../../actions/configuregeneralactions';

const styles = {
  name: {
    width: 200,
    marginLeft: 25,
    marginBottom: 10
  },
  rx: {
    width: 90,
    marginLeft: 25,
    marginBottom: 10
  },
  errorstyle: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  },
  tipMessage: {
    position: 'relative',
    float: 'right',
    height: '20px',
    padding: '2px',
    marginTop: '36px',
    marginRight: '24px'
  }
};

const IsNumeric = (input) => {
  var RE = /^\d*\d+$/;
  return RE.test(input);
};

class RxNumEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { errorText: '', value: props.value }
  }
  onChange(event) {
    var isItNumeric = IsNumeric(event.target.value);
    if (isItNumeric) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'Numbers only!' })
    }
    return isItNumeric;
  }
  render() {
    return(
      <TextField
        errorText={ this.state.errorText }
        errorStyle={styles.errorstyle}
        onChange={(e) => {if(this.onChange(e)){
          this.props.onRxNumChange(e.target.value);
          this.props.onBuildLog(this.props.startdate, this.props.enddate)}}}
        style={styles.rx}
        hintText="Rx#"
        floatingLabelText="Rx#"/>
    );
  }
}

//<CarriesSelector />
const LogBuilder = ({ onNameChange, onRxNumChange, onDrugBlur, onDoseChange, onBuildLog, onPickDrug,
  onSetStartDate, onSetEndDate, startdate, enddate, timeinterval, onSetTimeInterval, maxinterval,
  selecteddrug, druglist}) => (
  <section>

    <TextField
      onBlur={(e) => {onNameChange(e.target.value); onBuildLog(startdate, enddate)}}
      style={styles.name}
      hintText="e.g. Lee, John"
      floatingLabelText="Name"/>
    <RxNumEntry onRxNumChange={onRxNumChange} onBuildLog={onBuildLog} startdate={startdate} enddate={enddate} />
    <h6 style={styles.tipMessage}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TAB = forward <br/>Shift+TAB = backwards</h6>

    <br/>
    <DrugPicker
      selectedDrug={selecteddrug}
      drugList={druglist}
      onBuildLog={onBuildLog}
      startdate={startdate}
      enddate={enddate}
      onPickDrug={onDrugBlur}
      onSetDrug={onSetDrug}
      onDoseChange={onDoseChange} />
    <DateSelector
      onValidateDates={(x)=>console.log(x)}
      onBuildLog={onBuildLog}
      onSetTimeInterval={onSetTimeInterval}
      timeinterval={timeinterval}
      maxinterval={maxinterval}
      startdate={startdate}
      enddate={enddate}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate} />
  </section>
);

LogBuilder.propTypes = {
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  timeinterval: PropTypes.number.isRequired,
  maxinterval: PropTypes.string.isRequired,
  selecteddrug: PropTypes.object.isRequired,
  druglist: PropTypes.array.isRequired,

  onNameChange: PropTypes.func.isRequired,
  onRxNumChange: PropTypes.func.isRequired,
  onDrugBlur: PropTypes.func.isRequired,
  onDoseChange: PropTypes.func.isRequired,
  onBuildLog: PropTypes.func.isRequired,
  onPickDrug: PropTypes.func.isRequired,
  onSetDrug: PropTypes.func.isRequired,
  onSetStartDate: PropTypes.func.isRequired,
  onSetEndDate: PropTypes.func.isRequired,
  onSetTimeInterval: PropTypes.func.isRequired,
};

export default LogBuilder;