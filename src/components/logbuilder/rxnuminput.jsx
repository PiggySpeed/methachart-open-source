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
      value: ''
    };
    this.isNumeric = this.isNumeric.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isNumeric(input){
    const RE = new  RegExp(/^\d*\d+$/);
    return RE.test(input);
  }
  onChange(e) {
    if(e.target.value === ''){
      this.setState({ errorText: '' })
    } else if(!this.isNumeric(e.target.value)) {
      this.setState({ errorText: 'Numbers only!' })
    } else {
      this.setState({ errorText: '' })
    }
  }
  render() {
    return(
      <TextField
        errorText={this.state.errorText}
        errorStyle={styles.error}
        style={styles.rx}
        onChange={this.onChange}
        onBlur={e => this.props.onBlur(e.target.value)}
        hintText="Rx#"
        floatingLabelText="Rx#"/>
    );
  }
}
RxNumInput.propTypes = {
  onBlur: PropTypes.func.isRequired
};

export default RxNumInput;