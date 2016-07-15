'use strict';
import './configurespecific.less';
import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

import LogRow from 'components/logrow/logrow.jsx';
import { onBuildLog } from './configurespecificactions';

const styles = {
  tablewrapper: {
    position: "relative",
    height: "100%",
    width: "100%"
  }
};

const ConfigureSpecificContainer = ({ logdata, startdate, enddate }) => (
  <section className="configure-specific-container">
    <Table height="300px">
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Witness</TableHeaderColumn>
          <TableHeaderColumn>Take Home</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={true}>
        {logdata.map((item, id) => {
          return <LogRow rowNumber={id} key={id} rowdata={item} />
        })}
      </TableBody>
    </Table>
  </section>
);
const mapStateToProps = (state) => {
  return {
    logdata: state.ConfigureSpecificReducer.get("logdata"),
    startdate: state.ConfigureSpecificReducer.get("startdate"),
    enddate: state.ConfigureSpecificReducer.get("enddate")
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};
const ConfigureSpecificPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureSpecificContainer);
export default ConfigureSpecificPage;

//<TableHeaderColumn>Carries?</TableHeaderColumn>