'use strict';
import React from 'react';
import { connect } from 'react-redux';

class HomePageContainer extends React.Component {
  render() {
    return(
      <div>
        home page
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
const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
export default HomePage;