'use strict';
import React, { Component, PropTypes } from 'react';

import moment from 'moment';
import TextField from 'material-ui/TextField';
import { ViewRow } from '../';

const styles = {
  container: {
    position: 'relative',
    flex: 'none',
    width: '150px',
    border: '1px solid #CCCCCC',
    height: '50px',
    margin: '2px 0 2px 25px'
  },
  datefieldtextinput: {
    width: '35px',
    margin: "0px 4px"
  },
  label: {
    position: 'absolute',
    top: '-13px',
    left: '15px',
    backgroundColor: '#FFFFFF'
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
      day: null,
      month: null,
      year: '16',
      dayError: '',
      monthError: '',
      yearError: ''
    };
    this.onBlur = this.onBlur.bind(this);
    this.isNumeric = this.isNumeric.bind(this);
    this.validateDay = this.validateDay.bind(this);
    this.validateMonth = this.validateMonth.bind(this);
    this.validateYear = this.validateYear.bind(this);
  }
  onBlur(){
    (this.state.day && this.state.month && this.state.year)
      ? this.props.onDateBlur([this.state.day, this.state.month, this.state.year])
      : null;
  }
  isNumeric(input){
    const RE = new RegExp(/^\d*\d+$/);
    return RE.test(input);
  }
  validateDay(e){
    const DD = e.target.value;

    if(DD === ''){
      this.setState({ dayError: ''})
    } else if(!this.isNumeric(DD)){
      this.setState({ dayError: 'Must Be A Number!'})
    } else {
      +DD <= 31 && +DD >= 1
        ? this.setState({ validDay: true, day: DD, dayError: '' })
        : this.setState({ validDay: false, dayError: 'Invalid Day!' })
    }
  }
  validateMonth(e){
    const MM = e.target.value;

    if(MM === ''){
      this.setState({ monthError: ''})
    } else if(!this.isNumeric(MM)){
      this.setState({ monthError: 'Must Be A Number!'})
    } else {
      +MM <= 12 && +MM >= 1
        ? this.setState({ validMonth: true, month: MM, monthError: '' })
        : this.setState({ validMonth: false, monthError: 'Invalid Month!' })
    }
  }
  validateYear(e){
    const currentYear = moment().get('year');
    const nextYear = currentYear + 1;
    const YY = e.target.value;
    const YYYY = +YY + 2000;

    if(YY === ''){
      this.setState({ yearError: ''})
    } else if(!this.isNumeric(YY)){
      this.setState({ yearError: 'Must Be A Number!'})
    } else {
      ( YYYY === currentYear) || ( YYYY === nextYear )
        ? this.setState({ validYear: true, year: YY, yearError: '' })
        : this.setState({ validYear: false, yearError: 'Invalid year!' })
    }
  }
  render() {
    return(
      <ViewRow style={styles.container} onBlur={this.onBlur}>
        <h6 style={styles.label}>{this.props.label}</h6>
        <TextField
          key='day'
          errorText={this.state.dayError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="dd"
          maxLength="2"
          onChange={this.validateDay}/>
        <TextField
          key='month'
          errorText={this.state.monthError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="mm"
          maxLength="2"
          onChange={this.validateMonth}/>
        <TextField
          key='year'
          defaultValue="16"
          errorText={this.state.yearError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText="yy"
          maxLength="2"
          onChange={this.validateYear}/>
      </ViewRow>
    );
  }
}
DateField.propTypes = {
  label: PropTypes.string.isRequired,
  onDateBlur: PropTypes.func.isRequired,
};
export default DateField;