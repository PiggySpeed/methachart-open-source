'use strict';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import './chart.less';
import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import ConfigureGeneralPage from 'modules/configuregeneral/configuregeneral.jsx';
//import ConfigureSpecificPage from 'modules/configurespecific/configurespecific.jsx';

const styles = {
  tabcontainer: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  tab: {
    backgroundColor: "#212121",
    height: "100%"
  },
  inkbar: {
    color: "#212121"
  }
};

class ChartContainer extends React.Component {
  render() {
    return(
      <Tabs style={styles.tabcontainer} >
        <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="Methadone Log Builder">
          <ConfigureGeneralPage />
        </Tab>
      </Tabs>
    );
  }
}

// TODO: do something with the preview panel
//<Tabs style={styles.tabcontainer} >
//  <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="Main">
//  </Tab>
//  <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="Preview">
//    <ConfigureSpecificPage />
//  </Tab>
//</Tabs>

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};
const ChartPage = connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
export default ChartPage;