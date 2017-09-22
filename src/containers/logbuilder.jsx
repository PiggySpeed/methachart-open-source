'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as logBuilderActions from '../actions/logbuilder';
import { DRUG_LIST } from '../actions/logbuilder';
import {
  NameInput,
  RxNumInput,
  DrugPicker,
  MethadoneDosePicker,
  ViewCol,
  ViewRow
} from '../components';
import { DateSelectorContainer } from './';

class LogBuilderWrapper extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {
      selecteddrug,

      onNameBlur,
      onRxNumBlur,
      onDoseBlur,
      onSetDrug,
      onTakehomeBlur
    } = this.props;

    return(
      <ViewCol style={{ alignItems: 'flex-start', width: '100%', height: '100%' }}>

        <ViewRow style={{ justifyContent: 'flex-start', flex: 'none', height: '75px', width: '100%' }}>
          <NameInput onBlur={onNameBlur} />
          <RxNumInput onBlur={onRxNumBlur} />
        </ViewRow>

        <ViewRow style={{ justifyContent: 'flex-start', alignItems: 'flex-end', flex: 'none', height: '75px', width: '100%' }}>
          <DrugPicker
            selectedDrug={selecteddrug}
            drugList={DRUG_LIST}
            onSetDrug={onSetDrug}
          />
          <MethadoneDosePicker onDoseBlur={onDoseBlur} onTakehomeBlur={onTakehomeBlur} />
        </ViewRow>

        <ViewRow style={{ marginTop: '25px', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
          <DateSelectorContainer />
        </ViewRow>

      </ViewCol>
    );
  }
}
LogBuilderWrapper.propTypes = {
  selecteddrug:           PropTypes.object.isRequired,

  onNameBlur:             PropTypes.func.isRequired,
  onRxNumBlur:            PropTypes.func.isRequired,
  onDoseBlur:             PropTypes.func.isRequired,
  onSetDrug:              PropTypes.func.isRequired,
  onTakehomeBlur:         PropTypes.func.isRequired
};


const mapStateToProps = ({LogBuilder}) => {
  return {
    startdate:        LogBuilder.startdate,
    enddate:          LogBuilder.enddate,
    timeinterval:     LogBuilder.timeinterval,
    selecteddrug:     LogBuilder.selecteddrug
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...logBuilderActions}, dispatch)
};
const LogBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(LogBuilderWrapper);
export default LogBuilderContainer;