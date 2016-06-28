'use strict';
import './dateselector.less';
import React from 'react';
import { connect } from 'react-redux';

import DatePicker from 'material-ui/DatePicker';

const styles = {
  date: {
    position: 'relative',
    float: 'left',
    height: 50,
    width: 200,
    marginLeft: 25
  }
};

const DateSelector = ({ }) => (
  <section className="dateselector-container">
    <DatePicker
      style={styles.date}
      autoOk={true}
      firstDayOfWeek={0}
      floatingLabelText="Start Date"/>
    <DatePicker
      style={styles.date}
      autoOk={true}
      firstDayOfWeek={0}
      floatingLabelText="End Date"/>
  </section>
);

export default DateSelector;