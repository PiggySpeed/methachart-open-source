'use strict';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import './chart.less';
import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import ConfigureGeneralPage from 'modules/configuregeneral/configuregeneral.jsx';
import ConfigureSpecificPage from 'modules/configurespecific/configurespecific.jsx';

const styles = {
  tabcontainer: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  tab: {
    backgroundColor: "#FF5722",
    height: "100%"
  },
  inkbar: {
    backgroundColor: "#FF5722"
  }
};

class ChartContainer extends React.Component {
  render() {
    return(
      <Tabs style={styles.tabcontainer} >
        <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="General">
          <ConfigureGeneralPage />
        </Tab>
        <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="Specific">
          <ConfigureSpecificPage />
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};
const ChartPage = connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
export default ChartPage;