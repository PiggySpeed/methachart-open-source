'use strict';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import ConfigureGeneralPage from 'modules/configuregeneral/configuregeneral.jsx';

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

class TabsWrapper extends Component {
  render() {
    return(
      <Tabs style={styles.tabcontainer} >
        <Tab inkBarStyle={styles.inkbar} style={styles.tab} label="Methadone Log Builder">
          { this.props.children }
        </Tab>
      </Tabs>
    );
  }
}

export default TabsWrapper;