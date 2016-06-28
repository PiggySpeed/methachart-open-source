'use strict';
import './carriesselector.less';
import React from 'react';

// MUI Components
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  checkbox: {
    float: 'left',
    marginBottom: 16,
    width: 75
  },
  dropdown: {
    position: 'relative',
    float: 'left',
    width: 100,
    marginTop: 15
  }
};

const CarriesSelector = ({ }) => (
  <section className="carriesselector-container">
    <Checkbox
      label="Carries"
      style={styles.checkbox} />
    <p className="carries-text" >on</p>
    <DropDownMenu style={styles.dropdown}
                  value="Weekends"
                  autoWidth={false}>
      <MenuItem value={1} primaryText="Weekends" />
      <MenuItem value={2} primaryText="Weekdays" />
      <MenuItem value={3} primaryText="Custom" />
    </DropDownMenu>
  </section>
);

export default CarriesSelector;