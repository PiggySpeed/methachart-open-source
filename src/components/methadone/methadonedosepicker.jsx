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
    this.onChange = this.onChange.bind(this);
    this.onDoseBlur = this.onDoseBlur.bind(this);
    this.onTakehomeBlur = this.onTakehomeBlur.bind(this);
  }
  onChange(e) {
    const dose = e.target.value;

    if(dose === ''){
      this.setState({ errorText: '' })
    } else if(!isStringPosNum(dose)){
      this.setState({ errorText: 'Numbers only!' });
    } else if(+dose > 50){
      this.setState({ errorText: 'High Dose!' })
    } else {
      this.setState({ errorText: '' })
    }
  }
  onDoseBlur(e){
    if(!isStringPosNum(e.target.value)){
      const numericDose = +e.target.value;
      this.props.onDoseBlur(numericDose);
    }
  }
  onTakehomeBlur(e){
    if(!isStringPosNum(e.target.value)){
      const numericDose = +e.target.value;
      this.props.onTakehomeBlur(numericDose);
    }
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