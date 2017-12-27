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
  Panel,
  ViewCol,
} from '../components';
import { DateSelectorContainer } from './';

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%'
  }
};

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
      <ViewCol style={styles.container}>

        <Panel>
          <NameInput onBlur={onNameBlur} />
          <RxNumInput onBlur={onRxNumBlur} />
        </Panel>

        <Panel>
          <DrugPicker
            selectedDrug={selecteddrug}
            drugList={DRUG_LIST}
            onSetDrug={onSetDrug}
          />
          <MethadoneDosePicker onDoseBlur={onDoseBlur} onTakehomeBlur={onTakehomeBlur} />
        </Panel>

        <Panel style={{ marginTop: '25px' }}>
          <DateSelectorContainer />
        </Panel>

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