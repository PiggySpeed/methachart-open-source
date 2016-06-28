'use strict';
import './main.less';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import ChartPage from 'modules/chart/chart.jsx';
import Navigation from 'components/navigation/navigation.jsx';
import NavigationButton from 'components/navigation/navigationbutton.jsx';
import Content from 'components/content/content.jsx';
import Feed from 'components/feed/feed.jsx';
import Footer from 'components/footer/footer.jsx';


import { onClick } from './mainactions';

const MOCK_DATA = {

};


class MainContainer extends React.Component {
  constructor(props){
    super(props)
  }
  goToRoute(routeURL) {
    this.context.router.push({
      pathname: routeURL
    })
  }
  render() {
    return(
      <div className="main-container">
        <Feed>

        </Feed>
        <Content>
          {this.props.children || <ChartPage/>}
          <Footer changeRoute={this.goToRoute.bind(this)} />
        </Content>
      </div>
    );
  }
}
MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

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

//<Navigation>
//  <NavigationButton path="/" text="Home" />
//  <NavigationButton path="/about" text="About" />
//  <button className="testbtn" onClick={() => this.props.onClick("tree")}>teee</button>
//</Navigation>