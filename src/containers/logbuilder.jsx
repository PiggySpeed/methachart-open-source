'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logBuilderActions from '../actions/logbuilder';

import { View } from 'react-native';
import TextField from 'material-ui/TextField';
import {
  TabsWrapper,
  NameInput,
  RxNumInput,
  DrugPicker,
  DateSelector,
  Tip,
  MethadoneDosePicker
} from '../components';


class LogBuilderWrapper extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const {
      startdate,
      enddate,
      timeinterval,
      maxinterval,
      selecteddrug,
      druglist,

      onNameBlur,
      onRxNumBlur,
      onDrugBlur,
      onDoseBlur,
      onBuildLog,
      onSetDrug
    } = this.props;

    return(
      <TabsWrapper>

        <NameInput onBlur={onNameBlur} />

        <Tip />

        <RxNumInput onBlur={onRxNumBlur} />

        <DrugPicker
          selectedDrug={selecteddrug}
          drugList={druglist}
          onBuildLog={onBuildLog}
          startdate={startdate}
          enddate={enddate}
          onPickDrug={onDrugBlur}
          onSetDrug={onSetDrug}
        />

        <MethadoneDosePicker onBlur={onDoseBlur} />

        <DateSelector
          onBuildLog={onBuildLog}
          timeinterval={timeinterval}
          maxinterval={maxinterval}
          startdate={startdate}
          enddate={enddate}
        />

      </TabsWrapper>
    );
  }
}
LogBuilderWrapper.propTypes = {
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
  onSetDrug:              PropTypes.func.isRequired
};


const mapStateToProps = ({LogBuilder}) => {
  return {
    startdate:        LogBuilder.get('startdate'),
    enddate:          LogBuilder.get('enddate'),
    timeinterval:     LogBuilder.get('timeinterval'),
    maxinterval:      LogBuilder.get('maxinterval'),
    selecteddrug:     LogBuilder.get('selecteddrug'),
    druglist:         LogBuilder.get('druglist')
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...logBuilderActions}, dispatch)
};
const LogBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(LogBuilderWrapper);
export default LogBuilderContainer;