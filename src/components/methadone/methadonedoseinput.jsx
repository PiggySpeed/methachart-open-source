'use strict';
import React, { Component, PropTypes } from 'react';
import { isStringPosNum } from '../../utils/validation';

import { ViewRow } from '../';
import TextField from 'material-ui/TextField/TextField';
import TakeHomeDoseInput from './takehomedoseinput.jsx';

const styles = {
  dose: {
    width: 50
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  }
};

class MethadoneDoseInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
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
  onBlur(e){
    this.props.onBlur(e.target.value);
  }
  render() {
    return (
      <TextField
        errorText={this.state.errorText}
        errorStyle={styles.error}
        style={styles.dose}
        onChange={this.onChange}
        onBlur={this.onBlur}
        hintText='Dose'
        floatingLabelText='Dose'
        maxLength='5'
      />
    )
  }
}
MethadoneDoseInput.propTypes = {
  onBlur: PropTypes.func.isRequired
};

export default MethadoneDoseInput;