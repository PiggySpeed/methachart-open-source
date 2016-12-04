'use strict';
import React, { Component, PropTypes } from 'react';
import { ViewRow } from '../';
import TextField from 'material-ui/TextField/TextField';

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
    this.isNumeric = this.isNumeric.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isNumeric(input){
    const RE = new  RegExp(/^\d*\d+$/);
    return RE.test(input);
  }
  onChange(e) {
    const dose = e.target.value;

    if(dose === ''){
      this.setState({ errorText: '' })
    } else if(!this.isNumeric(dose)){
      this.setState({ errorText: 'Numbers only!' });
    } else if(+dose > 50){
      this.setState({ errorText: 'High Dose!' })
    } else {
      this.setState({ errorText: '' })
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
          onBlur={e => this.props.onBlur(e.target.value)}
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