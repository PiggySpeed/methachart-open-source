'use strict';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { isStringPosNum } from '../../utils/validation';
import { pad } from '../../utils/date';

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
      day: 0,
      month: 0,
      year: (moment().get('year') + '').slice(2),
      dayError: '',
      monthError: '',
      yearError: ''
    };
    this.onBlur = this.onBlur.bind(this);
    this.validateDay = this.validateDay.bind(this);
    this.validateMonth = this.validateMonth.bind(this);
    this.validateYear = this.validateYear.bind(this);
  }
  onBlur(){
    this.props.onDateBlur(pad(this.state.day), pad(this.state.month), pad(this.state.year));
    !(this.state.day && this.state.month && this.state.year)
      ? this.props.onInvalidDate(`${this.props.label} date is invalid`)
      : this.props.onInvalidDate('');
  }
  validateDay(e){
    const DD = e.target.value;

    if(DD === ''){
      this.setState({ day: 0, dayError: '' })
    } else if(!isStringPosNum(DD)){
      this.setState({ day: 0,  dayError: 'Must Be A Number!' })
    } else {
      const numericDD = +DD;
      numericDD >= 1 && numericDD <= 31
        ? this.setState({ day: numericDD, dayError: '' })
        : this.setState({ day: 0, dayError: 'Invalid Day!' })
    }
  }
  validateMonth(e){
    const MM = e.target.value;

    if(MM === ''){
      this.setState({ month: 0, monthError: '' })
    } else if(!isStringPosNum(MM)){
      this.setState({ month: 0, monthError: 'Must Be A Number!' })
    } else {
      const numericMM = +MM;
      numericMM >= 1 && numericMM <= 12
        ? this.setState({ month: numericMM, monthError: '' })
        : this.setState({ month: 0, monthError: 'Invalid Month!' })
    }
  }
  validateYear(e){
    const YY = e.target.value;
    const currentYear = moment().get('year');
    const nextYear = currentYear + 1;

    if(YY === ''){
      this.setState({ year: 0, yearError: '' })
    } else if(!isStringPosNum(YY)){
      this.setState({ year: 0, yearError: 'Must Be A Number!' })
    } else {
      const numericYYYY = +YY + 2000;
      ( numericYYYY === currentYear) || ( numericYYYY === nextYear )
        ? this.setState({ year: YY, yearError: '' })
        : this.setState({ year: 0, yearError: 'Invalid year!' })
    }
  }
  render() {
    const defaultYear = (moment().get('year') + '').substring(2);

    return(
      <ViewRow style={styles.container} onBlur={this.onBlur}>
        <h6 style={styles.label}>{this.props.label}</h6>
        <TextField
          key='day'
          errorText={this.state.dayError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText='dd'
          maxLength='2'
          onChange={this.validateDay}/>
        <TextField
          key='month'
          errorText={this.state.monthError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText='mm'
          maxLength='2'
          onChange={this.validateMonth}/>
        <TextField
          key='year'
          defaultValue={defaultYear}
          errorText={this.state.yearError}
          style={styles.datefieldtextinput}
          inputStyle={styles.inputstyle}
          hintStyle={styles.hintstyle}
          hintText='yy'
          maxLength='2'
          onChange={this.validateYear}/>
      </ViewRow>
    );
  }
}
DateField.propTypes = {
  label:                PropTypes.string.isRequired,
  onDateBlur:           PropTypes.func.isRequired,
  onInvalidDate:        PropTypes.func.isRequired
};
export default DateField;