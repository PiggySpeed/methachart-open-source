'use strict';
import './content.less';
import React from 'react';
import { connect } from 'react-redux';

const Content = ({...props }) => (
  <section className="content-container">
    {props.children}
  </section>
);
export default Content;