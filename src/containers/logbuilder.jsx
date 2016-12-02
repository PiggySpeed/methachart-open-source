'use strict';
import { connect } from 'react-redux';

import { LogBuilder } from '../components';

// Actions
import {
  onNameChange, onRxNumChange, onDrugBlur, onDoseChange, onBuildLog,
  onSetStartDate, onSetEndDate, onSetTimeInterval,
  } from 'modules/configurespecific/configurespecificactions';
import {
  onPickDrug, onSetDrug
} from './../actions/configuregeneralactions';


const mapStateToProps = (state) => {
  return {
    startdate: state.ConfigureSpecificReducer.get("startdate"),
    enddate: state.ConfigureSpecificReducer.get("enddate"),
    timeinterval: state.ConfigureSpecificReducer.get("timeinterval"),
    maxinterval: state.ConfigureSpecificReducer.get("maxinterval"),
    selecteddrug: state.ConfigureGeneralReducer.get("selecteddrug"),
    druglist: state.ConfigureGeneralReducer.get("druglist")
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: (name) => {dispatch(onNameChange(name))},
    onRxNumChange: (rxnum) => {dispatch(onRxNumChange(rxnum))},
    onDrugBlur: (drug) => {dispatch(onDrugBlur(drug))},
    onDoseChange: (dose) => {dispatch(onDoseChange(dose))},
    onBuildLog: (startdate, enddate) => {dispatch(onBuildLog(startdate, enddate))},
    onPickDrug: (drug) => {console.log(drug)}, //dispatch(onPickDrug(drug))
    onSetDrug: (e, din) => {console.log("tree", din); dispatch(onSetDrug(din))},
    onSetStartDate: (startdate) => { if(startdate){dispatch(onSetStartDate(startdate))} },
    onSetEndDate: (enddate) => { if(enddate){dispatch(onSetEndDate(enddate)) }},
    onSetTimeInterval: (startdate, enddate, maxinterval) => { if(startdate && enddate){dispatch(onSetTimeInterval(startdate, enddate, maxinterval))} }
  }
};
const LogBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(LogBuilder);
export default LogBuilderContainer;