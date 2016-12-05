'use strict';
import React from 'react';
import { ViewCol } from '../components';

const AboutContainer = () => (
  <ViewCol style={{padding: '50px 25px', minHeight: 'min-content', alignItems: 'flex-start'}}>
    <ViewCol style={{alignSelf: 'center'}}>
      <h1>MethaChart v1.3</h1>
      <h4>Dec 04, 2016 | by jlee</h4><br/>
    </ViewCol>
    <p>Bug Fixes: Added Weekdays, Take Home Dosing, Years support (up to 2100).</p><br/>

    <h4>How to use MethaChart Effectively:</h4>
    <p>
      Use Tab and Shift+Tab to go forwards or backwards.
    </p>

    <p>
      While MethaChart tries to make sure you're entering valid dates and values
      it can't prevent you from entering incorrect date intervals or incorrect doses.
      It also can't prevent you from grabbing the wrong log sheet from the printer.

      I like to use these steps to make sure everything is 100% correct.
    </p>
    <ol>
      <li>Compare the NAME with the original Rx, circle if valid.</li>
      <li>Compare the START and END dates with the original Rx, circle both if valid.</li>
      <li>Compare the DOSE with the original Rx, circle if valid.</li>
    </ol>

    <p>This dates may be inaccurate when entering year 2100, so make sure you check for an update by then!</p>
  </ViewCol>
);

export default AboutContainer;