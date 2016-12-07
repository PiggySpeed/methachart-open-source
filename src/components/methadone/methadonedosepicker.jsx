'use strict';
import React, { Component, PropTypes } from 'react';
import { isStringPosNum } from '../../utils/validation';

import { ViewRow } from '../';
import TextField from 'material-ui/TextField/TextField';
import TakeHomeDoseInput from './takehomedoseinput.jsx';
import MethadoneDoseInput from './methadonedoseinput.jsx';

class MethadoneDosePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorText: ''
    };
    this.onDoseBlur = this.onDoseBlur.bind(this);
    this.onTakehomeBlur = this.onTakehomeBlur.bind(this);
  }
  onDoseBlur(value){
    isStringPosNum(value)
      ? this.props.onDoseBlur(+value)
      : this.props.onDoseBlur(0);
  }
  onTakehomeBlur(value){
    isStringPosNum(value)
      ? this.props.onTakehomeBlur(+value)
      : this.props.onTakehomeBlur(0);
  }
  render() {
    return (
      <ViewRow flex='none' align='flex-end'>

        <MethadoneDoseInput onBlur={this.onDoseBlur} />
        <h4 style={{margin: '5px'}}>mL</h4>

        <TakeHomeDoseInput onBlur={this.onTakehomeBlur} />
        <h6 style={{margin: '5px'}}>mL</h6>

      </ViewRow>
    )
  }
}
MethadoneDosePicker.propTypes = {
  onDoseBlur: PropTypes.func.isRequired,
  onTakehomeBlur: PropTypes.func.isRequired
};

export default MethadoneDosePicker;