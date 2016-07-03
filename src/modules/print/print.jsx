'use strict';
import './print.less';
import React from 'react';
import { connect } from 'react-redux';

export const printDocument = () => {
  window.frames["printf"].focus();
  window.frames["printf"].print();
  //window.document.getElementById("print").print();
  //window.frames["printf"].print();
  //var pri = document.getElementById("ifmcontentstoprint").contentWindow;
  //pri.document.open();
  //pri.document.write(this.props.children || <h1>Error!</h1>);
  //pri.document.close();
  //pri.focus();
  //pri.print();
};

//function printDiv(divName) {
//  var printContents = document.getElementById(divName).innerHTML;
//  var originalContents = document.body.innerHTML;
//  document.body.innerHTML = printContents;
//  window.print();
//  document.body.innerHTML = originalContents;
//}

const PrintContainer = ({ logdata }) => (
  <div className="print-container">
    <button onClick={()=>console.log(logdata)} >send info to print preview</button>
  </div>
);
const mapStateToProps = (state) => {
  return {
    logdata: state.ConfigureSpecificReducer.get("logdata")
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const PrintPage = connect(mapStateToProps, mapDispatchToProps)(PrintContainer);
export default PrintPage;

//<iframe id="printf" name="printf" src="modules/print/print.html" height="98%" width="70%"></iframe>
