'use strict';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import './chart.less';
import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

import ConfigureGeneralPage from 'modules/configuregeneral/configuregeneral.jsx';
import ConfigureSpecificPage from 'modules/configurespecific/configurespecific.jsx';

const STYLES = {
  tab: {
    backgroundColor: "#FF5722"
  },
  inkbar: {
    backgroundColor: "#FF5722"
  }
};

class ChartContainer extends React.Component {
  render() {
    return(
      <Tabs>
        <Tab inkBarStyle={STYLES.inkbar} style={STYLES.tab} label="General">
          <ConfigureGeneralPage />
        </Tab>
        <Tab inkBarStyle={STYLES.inkbar} style={STYLES.tab} label="Specific">
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
  return { }
};
const ChartPage = connect(mapStateToProps, mapDispatchToProps)(ChartContainer);
export default ChartPage;