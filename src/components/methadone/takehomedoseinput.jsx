'use strict';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField/TextField';
import { isStringPosNum } from '../../utils/validation';

const styles = {
  dose: {
    marginLeft: '25px',
    width: 25
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  }
};

class TakeHomeDoseInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e){
    const dose = e.target.value;

    if(dose === ''){
      this.setState({ errorText: '' });
    } else if(!isStringPosNum(e.target.value)){
      this.setState({ errorText: 'Numbers only!' });
    } else {
      this.setState({ errorText: '' })
    }
  }
  onBlur(e){
    this.props.onBlur(e.target.value);
  }
  render() {
    return(
      <TextField
        tabIndex={-1}
        errorText={this.state.errorText}
        errorStyle={styles.error}
        style={styles.dose}
        inputStyle={{textAlign: 'center', color: '#727272'}}
        onChange={this.onChange}
        onBlur={this.onBlur}
        defaultValue='0'
        floatingLabelText='Take Home (optional):'
        floatingLabelFixed={true}
        floatingLabelStyle={{ width: 200 }}
        maxLength='5'
      />
    );
  }
}
TakeHomeDoseInput.propTypes = {
  onBlur: PropTypes.func.isRequired
};
export default TakeHomeDoseInput;