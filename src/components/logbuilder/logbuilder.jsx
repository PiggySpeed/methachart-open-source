'use strict';
import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import DrugPicker from 'drugpicker.jsx';
import DateSelector from '../datefield/dateselector.jsx';
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
  startdate:              PropTypes.string.isRequired,
  enddate:                PropTypes.string.isRequired,
  timeinterval:           PropTypes.number.isRequired,
  maxinterval:            PropTypes.number.isRequired,
  selecteddrug:           PropTypes.object.isRequired,
  druglist:               PropTypes.object.isRequired,

  onNameBlur:             PropTypes.func.isRequired,
  onRxNumBlur:            PropTypes.func.isRequired,
  onDrugBlur:             PropTypes.func.isRequired,
  onDoseBlur:             PropTypes.func.isRequired,
  onBuildLog:             PropTypes.func.isRequired,
  onSetDrug:              PropTypes.func.isRequired,
  onSetStartDate:         PropTypes.func.isRequired,
  onSetEndDate:           PropTypes.func.isRequired,
  onSetTimeInterval:      PropTypes.func.isRequired
};

export default LogBuilder;