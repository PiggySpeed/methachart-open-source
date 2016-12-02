'use strict';
import { connect } from 'react-redux';
import { LogBuilder } from '../components';

import {
  onPickDrug, onSetDrug,
  onNameChange, onRxNumChange, onDrugBlur, onDoseChange, onBuildLog,
  onSetStartDate, onSetEndDate, onSetTimeInterval,
} from '../actions/logbuilder';

const mapStateToProps = ({LogBuilder}) => {
  return {
    startdate:        LogBuilder.get("startdate"),
    enddate:          LogBuilder.get("enddate"),
    timeinterval:     LogBuilder.get("timeinterval"),
    maxinterval:      LogBuilder.get("maxinterval"),
    selecteddrug:     LogBuilder.get("selecteddrug"),
    druglist:         LogBuilder.get("druglist")
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