'use strict';
import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const styles = {
  name: {
    width: 200,
    marginLeft: 25,
    marginBottom: 10
  },
  rx: {
    width: 90,
    marginLeft: 25,
    marginBottom: 10
  },
  error: {
    position: "absolute",
    top: 70 //This is a workaround for error text display
  },
  tipMessage: {
    position: 'relative',
    float: 'right',
    height: '20px',
    padding: '2px',
    marginTop: '36px',
    marginRight: '24px'
  }
};

const IsNumeric = (input) => {
  var RE = /^\d*\d+$/;
  return RE.test(input);
};

class RxNumEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { errorText: '', value: props.value }
  }
  onChange(event) {
    var isItNumeric = IsNumeric(event.target.value);
    if (isItNumeric) {
      this.setState({ errorText: '' })
    } else {
      this.setState({ errorText: 'Numbers only!' })
    }
    return isItNumeric;
  }
  render() {
    return(
      <TextField
        errorText={ this.state.errorText }
        errorStyle={styles.error}
        onChange={(e) => {if(this.onChange(e)){
          this.props.onRxNumChange(e.target.value);
          this.props.onBuildLog(this.props.startdate, this.props.enddate)}}}
        style={styles.rx}
        hintText="Rx#"
        floatingLabelText="Rx#"/>
    );
  }
}


export default RxNumEntry;