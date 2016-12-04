'use strict';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  tabcontainer: {
    height: '100%',
    width: '100%'
  },
  tab: {
    backgroundColor: "#212121",
    height: '100%',
    width: '100%'
  }
};

class TabsWrapper extends Component {
  render() {
    return(
      <Tabs style={styles.tabcontainer} >
        <Tab style={styles.tab} label="Methadone Log Builder">
          { this.props.children }
        </Tab>
      </Tabs>
    );
  }
}

export default TabsWrapper;