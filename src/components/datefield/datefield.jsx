'use strict';
import './datefield.less';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  datefieldtextinput: {
    position: 'relative',
    float: 'left',
    width: 35,
    margin: "0px 4px"
  },
  inputstyle: {
    textAlign: "center"
  },
  hintstyle: {
    padding: "0px 3px",
    margin: 0
  }
};

class DateField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validDay: null,
      validMonth: null,
      validYear: true,
      day: null,
      month: null,
      year: "16"
    }
  }
  validateDay(DD){
    parseInt(DD, 10) <= 31 && parseInt(DD, 10) >= 1
      ? this.setState({ validDay: true, day: DD })
      : this.setState({ validDay: false })
  }
  validateMonth(MM){
    parseInt(MM, 10) <= 12 && parseInt(MM, 10) >= 1
      ? this.setState({ validMonth: true, month: MM })
      : this.setState({ validMonth: false })
  }
  validateYear(YY){
    parseInt(YY, 10) <= 17 && parseInt(YY, 10) >= 16
      ? this.setState({ validYear: true, year: YY })
      : this.setState({ validYear: false })
  }
  isDateValid(){
    return ( this.state.validDay && this.state.validMonth && this.state.validYear )
  }
  displayError(key) {
    switch(key) {
      case "day":   { return this.state.validDay ? "" : this.state.day ? "Invalid Day" : "" }
      case "month": { return this.state.validMonth ? "" : this.state.month ? "Invalid Month" : "" }
      case "year":  { return this.state.validYear ? "" : this.state.year ? "Invalid Year" : "" }
      default: { return "" }
    }
  }
  onDateValidate() {
    this.props()
  }
  componentDidUpdate() {
    if(this.isDateValid()){
      this.props.onDateBlur([this.state.day, this.state.month, this.state.year]) }
  }
  render() {
    return(
      <section className="date-field-container">
        <h6 className="date-field-label">{this.props.label}</h6>
        <TextField
          errorText={ this.displayError("day") }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="dd"
          maxLength="2"
          onChange={(e) => this.validateDay(e.target.value)}/>
        <TextField
          errorText={ this.displayError("month") }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="mm"
          maxLength="2"
          onChange={(e) => this.validateMonth(e.target.value)}/>
        <TextField
          defaultValue="16"
          errorText={ this.displayError("year") }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="yy"
          maxLength="2"
          onChange={(e) => this.validateYear(e.target.value)}/>
      </section>
    );
  }
}
export default DateField;