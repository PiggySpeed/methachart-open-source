'use strict';
import React from 'react';
import { connect } from 'react-redux';

class AboutPageContainer extends React.Component {
  render() {
    return(
      <article>
        <h1>MethaChart v1.0</h1>
        <h2>Features</h2>
        <ul>
          <li>toggle print preview</li>
          <li>configure carries</li>
        </ul>
        <h2>Fixes</h2>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const AboutPage = connect(mapStateToProps, mapDispatchToProps)(AboutPageContainer);
export default AboutPage;