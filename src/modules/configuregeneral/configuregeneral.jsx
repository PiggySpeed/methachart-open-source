'use strict';
import './configuregeneral.less';
import React from 'react';
import { connect } from 'react-redux';

// MUI Components
import TextField from 'material-ui/TextField';

// Local Components
import DrugPicker from 'components/drugpicker/drugpicker.jsx';
import DateSelector from 'components/dateselector/dateselector.jsx';
import CarriesSelector from 'components/carriesselector/carriesselector.jsx';

// Actions
import onBuildLog from 'modules/configurespecific/configurespecificactions';
import {
  onNameBlur, onPickDrug, onDoseBlur,
  onSetStartDate, onSetEndDate, onSetTimeInterval,
  } from './configuregeneralactions';

const styles = {
  name: {
    width: 300,
    marginLeft: 24
  }
};
//<CarriesSelector />
const ConfigureGeneralContainer = ({ onNameBlur, onPickDrug, onDoseBlur, onBuildLog,
  onSetStartDate, onSetEndDate, startdate, enddate, timeinterval, onSetTimeInterval }) => (
  <section>
    <TextField
      onBlur={(e) => onNameBlur(e.target.value)}
      style={styles.name}
      hintText="Name"
      floatingLabelText="Name"
    /><br/>
    <DrugPicker drug="Methadone" onPickDrug={onPickDrug} onDoseBlur={onDoseBlur} />
    <DateSelector onValidateDates={(x)=>console.log(x)} onBuildLog={onBuildLog} onSetTimeInterval={onSetTimeInterval} timeinterval={timeinterval} startdate={startdate} enddate={enddate} onSetStartDate={onSetStartDate} onSetEndDate={onSetEndDate} />
  </section>
);
const mapStateToProps = (state) => {
  return {
    startdate: state.ConfigureGeneralReducer.get("startdate"),
    enddate: state.ConfigureGeneralReducer.get("enddate"),
    timeinterval: state.ConfigureGeneralReducer.get("timeinterval")
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onNameBlur: (name) => {dispatch(onNameBlur(name))},
    onPickDrug: (drug) => {dispatch(onPickDrug(drug))},
    onDoseBlur: (dose) => {dispatch(onDoseBlur(dose))},
    onSetStartDate: (startdate) => { if(startdate){dispatch(onSetStartDate(startdate))} },
    onSetEndDate: (enddate) => { if(enddate){dispatch(onSetEndDate(enddate)) }},
    onSetTimeInterval: (startdate, enddate) => { if(startdate && enddate){dispatch(onSetTimeInterval(startdate, enddate))} },
    onBuildLog: (startdate, enddate) => {dispatch(onBuildLog(startdate, enddate))}
  }
};
const ConfigureGeneralPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureGeneralContainer);
export default ConfigureGeneralPage;