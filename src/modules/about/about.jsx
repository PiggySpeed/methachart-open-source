'use strict';
import React from 'react';
import { connect } from 'react-redux';
import './about.less';

class AboutPageContainer extends React.Component {
  render() {
    return(
      <article className="about-container">
        <h1>MethaChart v1.2</h1>
        <h4>August 23, 2016 | by jlee</h4><br/>
        <p>Bug Fixes: Removed preview tab.</p><br/>
        <p>Up Next: Print by F10, Hide Print Screen, Print Blank Page, Configure Carries, Kadian & Suboxone</p><br/>
        <p>Need anything else? Just let me know!</p>
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