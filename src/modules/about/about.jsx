'use strict';
import React from 'react';
import { connect } from 'react-redux';

class AboutPageContainer extends React.Component {
  render() {
    return(
      <article>
        <h1>MethaChart v1.0</h1>
        <h4>July 08, 2016 | by jlee</h4>
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