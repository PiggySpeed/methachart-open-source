'use strict';
import './main.less';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import ChartPage from 'modules/chart/chart.jsx';
import Navigation from 'components/navigation/navigation.jsx';
import NavigationButton from 'components/navigation/navigationbutton.jsx';
import Content from 'components/content/content.jsx';
//import Feed from 'components/feed/feed.jsx';
import Footer from 'components/footer/footer.jsx';
//import PrintPage from 'modules/print/print.jsx';

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
        <Content>
          {this.props.children || <ChartPage/>}
          <Footer changeRoute={this.goToRoute.bind(this)} printdata={this.props.printdata} />
        </Content>
      </div>
    );
  }
}
MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

//printdata: {
//  headerdata: state.ConfigureSpecificReducer.toJS(),
//    logdata: state.ConfigureSpecificReducer.get("logdata").toArray()
//}

const mapStateToProps = (state) => {
  return {
    printdata: {
      headerdata: {
        name: state.ConfigureSpecificReducer.get('name'),
        startdate: state.ConfigureSpecificReducer.get('startdate'),
        enddate: state.ConfigureSpecificReducer.get('enddate'),
        timeinterval: state.ConfigureSpecificReducer.get('timeinterval')
      },
      logdata: state.ConfigureSpecificReducer.get('logdata').toArray()
    }
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};
const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainPage;

//<Navigation>
//  <NavigationButton path="/" text="Home" />
//  <NavigationButton path="/about" text="About" />
//  <button className="testbtn" onClick={() => this.props.onClick("tree")}>teee</button>
//</Navigation>