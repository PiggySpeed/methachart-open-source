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
import {
  onNameBlur, onRxNumBlur, onDrugBlur, onDoseBlur, onBuildLog
  } from 'modules/configurespecific/configurespecificactions';
import {
  onPickDrug, onSetDrug,
  onSetStartDate, onSetEndDate, onSetTimeInterval,
  } from './configuregeneralactions';

const styles = {
  name: {
    width: 200,
    marginLeft: 25
  },
  rx: {
    width: 75,
    marginLeft: 25
  }
};
//<CarriesSelector />
const ConfigureGeneralContainer = ({ onNameBlur, onRxNumBlur, onDrugBlur, onDoseBlur, onBuildLog, onPickDrug,
  onSetStartDate, onSetEndDate, startdate, enddate, timeinterval, onSetTimeInterval, maxinterval,
  selecteddrug, druglist}) => (
  <section>
    <TextField
      onBlur={(e) => onNameBlur(e.target.value)}
      style={styles.name}
      hintText="Name"
      floatingLabelText="Name"/>
    <TextField
      onBlur={(e) => onRxNumBlur(e.target.value)}
      style={styles.rx}
      hintText="Rx#"
      floatingLabelText="Rx#"/>
    <h6 className="tip-message"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TAB = forward <br/>Shift+TAB = backwards</h6>
    <br/>
    <DrugPicker
      selectedDrug={selecteddrug}
      drugList={druglist}
      onPickDrug={onDrugBlur}
      onSetDrug={onSetDrug}
      onDoseBlur={onDoseBlur} />
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
const mapStateToProps = (state) => {
  return {
    startdate: state.ConfigureGeneralReducer.get("startdate"),
    enddate: state.ConfigureGeneralReducer.get("enddate"),
    timeinterval: state.ConfigureGeneralReducer.get("timeinterval"),
    maxinterval: state.ConfigureGeneralReducer.get("maxinterval"),
    selecteddrug: state.ConfigureGeneralReducer.get("selecteddrug"),
    druglist: state.ConfigureGeneralReducer.get("druglist")
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onNameBlur: (name) => {dispatch(onNameBlur(name))},
    onRxNumBlur: (rxnum) => {dispatch(onRxNumBlur(rxnum))},
    onDrugBlur: (drug) => {dispatch(onDrugBlur(drug))},
    onDoseBlur: (dose) => {dispatch(onDoseBlur(dose))},
    onBuildLog: (startdate, enddate) => {dispatch(onBuildLog(startdate, enddate))},
    onPickDrug: (drug) => {console.log(drug)}, //dispatch(onPickDrug(drug))
    onSetDrug: (e, din) => {console.log("tree", din); dispatch(onSetDrug(din))},
    onSetStartDate: (startdate) => { if(startdate){dispatch(onSetStartDate(startdate))} },
    onSetEndDate: (enddate) => { if(enddate){dispatch(onSetEndDate(enddate)) }},
    onSetTimeInterval: (startdate, enddate, maxinterval) => { if(startdate && enddate){dispatch(onSetTimeInterval(startdate, enddate, maxinterval))} }
  }
};
const ConfigureGeneralPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureGeneralContainer);
export default ConfigureGeneralPage;