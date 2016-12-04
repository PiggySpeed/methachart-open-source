'use strict';
import React, { PropTypes } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  dropdown: {
    width: 200,
    marginBottom: '8px'
  }
};

const DrugPicker = ({ selectedDrug, drugList, onSetDrug }) => (
  <DropDownMenu
    tabIndex={-1}
    style={styles.dropdown}
    value={selectedDrug.din}
    onChange={(event, index, value) => onSetDrug(value)}
    autoWidth={true}
  >
    {drugList.map((item, id) => {return <MenuItem key={id} value={item.din} primaryText={item.displayname}/>} )}
  </DropDownMenu>
);
DrugPicker.propTypes = {
  selectedDrug:       PropTypes.object.isRequired,
  drugList:           PropTypes.array.isRequired,
  onSetDrug:          PropTypes.func.isRequired
};

export default DrugPicker;