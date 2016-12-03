'use strict';
import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const styles = {
  rx: {
    width: 90,
    marginLeft: 25,
    marginBottom: 10
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  }
};

class RxNumInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: '',
      value: props.value
    };
    this.onChange = this.onChange.bind(this);
  }
  static isNumeric(input){
    const RE = new  RegExp(/^\d*\d+$/);
    return RE.test(input);
  }
  onChange(e) {
    if(this.isNumeric(e.target.value)) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'Numbers only!' })
    }
  }
  render() {
    return(
      <TextField
        errorText={this.state.errorText}
        errorStyle={styles.error}
        style={styles.rx}
        onChange={this.onChange}
        onBlur={this.props.onBlur}
        hintText="Rx#"
        floatingLabelText="Rx#"/>
    );
  }
}
RxNumInput.propTypes = {
  onBlur: PropTypes.func.isRequired
};

export default RxNumInput;