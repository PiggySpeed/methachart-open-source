'use strict';
import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  dropdown: {
    position: 'relative',
    float: 'left',
    width: 250,
    marginTop: 15
  }
};

const DrugPicker = ({ selectedDrug, onBuildLog, startdate, enddate, drugList, onPickDrug, onSetDrug, onDoseChange }) => (
  <DropDownMenu
    style={styles.dropdown}
    value={selectedDrug.din}
    onChange={(event, index, value) => {onSetDrug(value); onPickDrug(selectedDrug)}}
    autoWidth={true}>
    {drugList.map((item, id) => {return <MenuItem key={id} value={item.din} primaryText={item.displayname}/>} )}
  </DropDownMenu>
);

export default DrugPicker;