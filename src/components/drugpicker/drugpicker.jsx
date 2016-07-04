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

const DrugPicker = ({ selectedDrug, drugList, onPickDrug, onSetDrug, onDoseBlur }) => (
  <section className="drugpicker-container">
    <DropDownMenu style={styles.dropdown}
                  value={selectedDrug.din}
                  onChange={(event, index, value) => {onSetDrug(value); onPickDrug(selectedDrug)}}
                  autoWidth={true}>
      {drugList.map((item, id) => {return <MenuItem key={id} value={item.din} primaryText={item.displayname}/>} )}
    </DropDownMenu>
    <TextField
      style={styles.dose}
      onChange={(e) => onDoseBlur(e.target.value)}
      hintText="Dose"
      floatingLabelText="Dose"/>
    <h3 className="drugpicker-unit" >mL</h3>
  </section>
);

export default DrugPicker;