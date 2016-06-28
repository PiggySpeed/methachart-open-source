'use strict';
import React from 'react';
import { connect } from 'react-redux';

class AboutPageContainer extends React.Component {
  render() {
    return(
      <article>
        <h1>MethaChart v1.0</h1>
        <p>A simple way to create methadone log sheets.</p>
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