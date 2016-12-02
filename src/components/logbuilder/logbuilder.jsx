'use strict';
import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import DrugPicker from '../drugpicker/drugpicker.jsx';
import DateSelector from '../dateselector/dateselector.jsx';
import CarriesSelector from '../carriesselector/carriesselector.jsx';
import RxNumEntry from './rxnumentry.jsx';
import { TabsWrapper } from '../';

const styles = {
  name: {
    width: 200,
    marginLeft: 25,
    marginBottom: 10
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

const LogBuilder = ({ onNameChange, onRxNumChange, onDrugBlur, onDoseChange, onBuildLog, onPickDrug, onSetDrug,
  onSetStartDate, onSetEndDate, startdate, enddate, timeinterval, onSetTimeInterval, maxinterval,
  selecteddrug, druglist}) => (
  <TabsWrapper>

    <TextField
      onBlur={(e) => {onNameChange(e.target.value); onBuildLog(startdate, enddate)}}
      style={styles.name}
      hintText="e.g. Lee, John"
      floatingLabelText="Name"
    />
    <RxNumEntry
      onRxNumChange={onRxNumChange}
      onBuildLog={onBuildLog}
      startdate={startdate}
      enddate={enddate}
    />
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
      onBuildLog={onBuildLog}
      onSetTimeInterval={onSetTimeInterval}
      timeinterval={timeinterval}
      maxinterval={maxinterval}
      startdate={startdate}
      enddate={enddate}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate} />
  </TabsWrapper>
);

LogBuilder.propTypes = {
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  timeinterval: PropTypes.number.isRequired,
  maxinterval: PropTypes.number.isRequired,
  selecteddrug: PropTypes.object.isRequired,
  druglist: PropTypes.object.isRequired,

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