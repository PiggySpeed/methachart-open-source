'use strict';
import React, { Component, PropTypes } from 'react';
import { ViewRow } from '../';
import TextField from 'material-ui/TextField/TextField';

const styles = {
  dose: {
    width: 50,
    marginLeft: 15
  },
  carry: {
    marginLeft: '60px',
    width: 25
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  }
};
class CarryDoseInput extends Component {
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
  onChange(e){
    const dose = e.target.value;

    if(dose === ''){
      this.setState({ errorText: '' });
    } else if(!this.isNumeric(dose)){
      this.setState({ errorText: 'Numbers only!' });
    } else {
      this.setState({ errorText: '' })
    }
  }
  onBlur(e){
    if(this.isNumeric(e.target.value)){
      this.props.onBlur(e.target.value);
    }
  }
  render() {
    return(
      <TextField
        tabIndex={-1}
        errorText={this.state.errorText}
        errorStyle={styles.error}
        style={styles.carry}
        inputStyle={{textAlign: 'center', color: '#727272'}}
        onChange={this.onChange}
        onBlur={e => this.props.onBlur(e.target.value)}
        defaultValue='0'
        floatingLabelText='Take Home (optional):'
        floatingLabelFixed={true}
        floatingLabelStyle={{ width: 200 }}
        maxLength='3'
      />
    );
  }
}
CarryDoseInput.propTypes = {
  onBlur: PropTypes.func.isRequired
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
      <ViewRow flex='none' align='flex-end'>
        <TextField
          errorText={this.state.errorText}
          errorStyle={styles.error}
          style={styles.dose}
          onChange={this.onChange}
          onBlur={e => this.props.onDoseBlur(e.target.value)}
          hintText='Dose'
          floatingLabelText='Dose'
          maxLength='2'
        />
        <h4 style={{margin: '5px'}}>mL</h4>

        <CarryDoseInput onBlur={this.props.onTakehomeBlur} />
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