'use strict';
import './dateselector.less';
import React from 'react';
import $ from 'jquery';

import TextField from 'material-ui/TextField';

const styles = {
  date: {
    position: 'relative',
    float: 'left',
    height: 50,
    width: 200,
    marginLeft: 25
  },
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

class DateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validDay: true,
      validMonth: true,
      validYear: true,
      day: null,
      month: null,
      year: null
    }
  }
  validateDay(DD) { parseInt(DD, 10) <= 31 && parseInt(DD, 10) >= 1 ? this.setState({ validDay: true, day: DD }) : this.setState({ validDay: false }) }
  validateMonth(MM) { parseInt(MM, 10) <= 12 && parseInt(MM, 10) >= 1 ? this.setState({ validMonth: true, month: MM }) : this.setState({ validMonth: false }) }
  validateYear(YY) { parseInt(YY, 10) <= 17 && parseInt(YY, 10) >= 16 ? this.setState({ validYear: true, year: YY }) : this.setState({ validYear: false }) }
  isDateComplete() {
    return ( this.state.validDay && this.state.validMonth && this.state.validYear )
  }
  render() {
    return(
      <section className="date-field-container">
        <h6 className="date-field-label">{this.props.label}</h6>
        <TextField
          className="input"
          errorText={ this.state.validDay ? "" : "Invalid Day" }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="dd"
          maxLength="2"
          onBlur={(e) => {this.validateDay(e.target.value)}}/>
        <TextField
          className="input"
          errorText={ this.state.validMonth ? "" : "Invalid Month" }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="mm"
          maxLength="2"
          onBlur={(e) => {this.validateMonth(e.target.value)}}/>
        <TextField
          defaultValue="16"
          className="input"
          errorText={ this.state.validYear ? "" : "Invalid Year" }
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="yy"
          maxLength="2"
          onBlur={(e) => {this.validateYear(e.target.value);
            this.props.onDateBlur( [this.state.day, this.state.month, this.state.year].every((item)=> item != null) ? [this.state.day, this.state.month, this.state.year] : null )} }/>
      </section>
    );
  }
}

const DateSelector = ({ onSetStartDate, onSetEndDate, onSetTimeInterval, startdate, enddate, timeinterval }) => (
  <section onClick={onSetTimeInterval(startdate, enddate)} className="dateselector-container">
    <DateField onDateBlur={onSetStartDate} label="Start"/>
    <DateField onDateBlur={onSetEndDate} label="End"/>
    <h6 className="dateinterval-text">{startdate} {startdate && enddate ? " to " : ""} {enddate}<br/>{ startdate && enddate ? timeinterval + " days" : ""}</h6>
  </section>
);

export default DateSelector;

// http://stackoverflow.com/questions/10539113/focusing-on-next-input-jquery
//$(function() {
//  var charLimit = 2;
//  $(".input").keydown(function(e) {
//
//    var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
//    console.log("this is ", this.value);
//    if (e.which == 8 && this.value.length == 0) {
//      $(this).prev('.input').focus();
//    } else if ($.inArray(e.which, keys) >= 0) {
//      return true;
//    } else if (this.value.length >= charLimit) {
//      $(this).next('.input').focus();
//      return false;
//    } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
//      return false;
//    }
//  }).keyup (function () {
//    if (this.value.length >= charLimit) {
//      $(this).next('.input').focus();
//      return false;
//    }
//  });
//});
