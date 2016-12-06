'use strict';
import React from 'react';
import { ViewCol } from '../components';

const AboutContainer = () => (
  <ViewCol style={{padding: '50px 25px', minHeight: 'min-content', alignItems: 'flex-start'}}>
    <ViewCol style={{alignSelf: 'center'}}>
      <h1>MethaChart v1.3</h1>
      <h4>Dec 04, 2016 | by jlee</h4><br/>
    </ViewCol>
    <br/>
    <h4>Features and Bug Fixes:</h4>
    <ul>
      <li>Validation of input.</li>
      <li>Weekdays now appear on logs.</li>
      <li>Same day take-home dosing.</li>
      <li>Dates up to year 2100 are now supported.</li>
      <li>Multiple tests implemented to ensure correct handling of data.</li>
    </ul>
    <br/>
    <br/>
    <h4>Using MethaChart:</h4>
    <p>
      Use Tab and Shift+Tab to go forwards or backwards.
    </p>
    <br/>
    <p>
      MethaChart prevents entering of nonsensical dates and doses, but it can't prevent you from
      entering incorrect doses, date ranges, or patient names. Use the following tips to help you
      check a log sheet prior to use:
    </p>
    <ol>
      <li>Compare the NAME with the original Rx, circle if correct.</li>
      <li>Compare the START and END dates with the original Rx, circle both if correct.</li>
      <li>Compare the DOSE with the original Rx, circle if correct.</li>
    </ol>
  </ViewCol>
);

export default AboutContainer;