'use strict';
import React, { Component, PropTypes } from 'react';
import { ViewRow } from '../';

const styles = {
  dose: {
    position: 'relative',
    float: 'left',
    width: 50,
    marginLeft: 25
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  }
};

// TODO: control sending data to actions when input is invalid
class MethadoneDosePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorText: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  static isNumeric(input){
    const RE = new  RegExp(/^\d*\d+$/);
    return RE.test(input);
  }
  onChange(e) {
    if(!this.isNumeric(e.target.value)){
      this.setState({ errorText: 'Numbers only!' });
    } else if(+e.target.value > 50){
      return this.setState({ errorText: 'High Dose!'})
    } else {
      return this.setState({ errorText: '' })
    }
  }
  render() {
    return (
      <ViewRow flex='none'>
        <TextField
          errorText={this.state.errorText}
          errorStyle={styles.error}
          style={styles.dose}
          onChange={this.onChange}
          onBlur={this.props.onBlur}
          hintText='Dose'
          floatingLabelText='Dose'
        />
        <h3>mL</h3>
      </ViewRow>
    )
  }
}
MethadoneDosePicker.propTypes = {
  onBlur: PropTypes.func.isRequired
};

export default MethadoneDosePicker;