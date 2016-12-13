'use strict';
import React from 'react';
import { ViewCol } from '../components';

const AboutContainer = () => (
  <ViewCol style={{padding: '50px 25px', minHeight: 'min-content', alignItems: 'flex-start'}}>
    <ViewCol style={{alignSelf: 'center'}}>
      <h1>MethaChart v1.3.1</h1>
      <h4>Dec 13, 2016 | by jlee</h4><br/>
    </ViewCol>
    <br/>
    <h4>Features and Bug Fixes (v.1.3.1):</h4>
    <ul>
      <li>Printing 28 rows will now fit the footer on the page. Same for other multiples of 28.</li>
    </ul>
    <h4>Features and Bug Fixes (v.1.3.0):</h4>
    <ul>
      <li>Input is validated.</li>
      <li>Weekdays now appear on logs.</li>
      <li>Same day take-home dosing.</li>
      <li>Dates up to year 2100 are now supported.</li>
      <li>Time stamps appear on logs as MMM DD, YYYY (HH:mm:ss).</li>
      <li>Multiple tests implemented to ensure correct handling of data.</li>
    </ul>
    <br/>
    <br/>
    <h4>Using MethaChart:</h4>
    <p>
      Use Tab and Shift+Tab to quickly go forward or backward.
    </p>
    <br/>
    <p>
      MethaChart prevents entering of nonsensical dates and doses, but it can't prevent you from
      entering incorrect doses, date ranges, or wrong names. Use the following tips to help you
      check a log sheet prior to use:
    </p>
    <ol>
      <li>Compare the NAME with the original Rx, circle if correct.</li>
      <li>Compare the START and END dates with the original Rx, circle both if correct.</li>
      <li>Compare the witness/takehome/total DOSE with the original Rx, circle if correct.</li>
    </ol>
  </ViewCol>
);

export default AboutContainer;