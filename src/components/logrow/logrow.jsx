'use strict';
import './logrow.less';
import React from 'react';
import { connect } from 'react-redux';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const LogRow = ({ rowdata, rowNumber }) => (
  <TableRow rowNumber={rowNumber}>
    <TableRowColumn>{rowdata.date}</TableRowColumn>
    <TableRowColumn>{rowdata.witness}</TableRowColumn>
    <TableRowColumn>{rowdata.takehome}</TableRowColumn>
    <TableRowColumn>{rowdata.total}</TableRowColumn>
    <TableRowColumn>
      {rowdata.carry}
    </TableRowColumn>
  </TableRow>
);

export default LogRow;