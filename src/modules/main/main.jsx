'use strict';
import './main.less';
import React from 'react';
import { connect } from 'react-redux';

import HomePage from 'modules/home/home.jsx';
import Navigation from 'components/navigation/navigation.jsx';
import NavigationButton from 'components/navigation/navigationbutton.jsx';
import Content from 'components/content/content.jsx';

import { onClick } from './mainactions';

class MainContainer extends React.Component {
  render() {
    return(
      <div className="main-container">
        <Navigation>
          <NavigationButton path="/" text="Home" />
          <NavigationButton path="/about" text="About" />
          <button className="testbtn" onClick={() => this.props.onClick("tree")}>teee</button>
        </Navigation>
        <Content>
          {this.props.children || <HomePage/>}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(onClick(text))
    }
  }
};
const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainPage;