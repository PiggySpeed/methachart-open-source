'use strict';
import React from 'react';
import { connect } from 'react-redux';

class AboutPageContainer extends React.Component {
  render() {
    return(
      <div>
        about page
      </div>
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