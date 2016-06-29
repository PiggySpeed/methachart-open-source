'use strict';
import './drugpicker.less';
import React from 'react';
import { connect } from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const styles = {
  dropdown: {
    position: 'relative',
    float: 'left',
    width: 250,
    marginTop: 15
  },
  dose: {
    position: 'relative',
    float: 'left',
    width: 50,
    marginLeft: 25
  }
};

const DrugPicker = ({ drug, onPickDrug, onDoseBlur }) => (
  <section className="drugpicker-container">
    <DropDownMenu style={styles.dropdown}
                  value={drug}
                  onChange={(e) => onPickDrug(e.target.value)}
                  autoWidth={false}>
      <MenuItem value={1} primaryText="Methadone" />
      <MenuItem value={2} primaryText="Suboxone" />
      <MenuItem value={3} primaryText="Kadian" />
    </DropDownMenu>
    <TextField
      style={styles.dose}
      onBlur={(e) => onDoseBlur(e.target.value)}
      hintText="Dose"
      floatingLabelText="Dose"/>
    <h3 className="drugpicker-unit" >mL</h3>
  </section>
);

export default DrugPicker;