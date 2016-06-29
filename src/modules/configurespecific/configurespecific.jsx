'use strict';
import './configurespecific.less';
import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

import LogRow from 'components/logrow/logrow.jsx';
import { onBuildLog } from './configurespecificactions';

const ConfigureSpecificContainer = ({ logdata, startdate, enddate, onBuildLog }) => (
  <section>
    <Table>
      <TableHeader>
        <TableRow onClick={()=>onBuildLog(startdate, enddate)}>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Witness</TableHeaderColumn>
          <TableHeaderColumn>Take Home</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn>Carries?</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={true}>
        {logdata.map((item, id) => {
          return <LogRow key={id} rowdata={item} />
        })}
      </TableBody>
    </Table>
  </section>
);
const mapStateToProps = (state) => {
  return {
    logdata: state.ConfigureSpecificReducer.get("logdata"),
    startdate: state.ConfigureGeneralReducer.get("startdate"),
    enddate: state.ConfigureGeneralReducer.get("enddate")
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onBuildLog: (startdate, enddate) => {dispatch(onBuildLog(startdate, enddate))}
  }
};
const ConfigureSpecificPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureSpecificContainer);
export default ConfigureSpecificPage;