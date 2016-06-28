'use strict';
import './configuregeneral.less';
import React from 'react';
import { connect } from 'react-redux';

// MUI Components
import TextField from 'material-ui/TextField';

// Local Components
import DrugPicker from 'components/drugpicker/drugpicker.jsx';
import DateSelector from 'components/dateselector/dateselector.jsx';
import CarriesSelector from 'components/carriesselector/carriesselector.jsx';

const styles = {
  name: {
    width: 300,
    marginLeft: 24
  }
};

const ConfigureGeneralContainer = ({ }) => (
  <section>
    <TextField
      style={styles.name}
      hintText="Name"
      floatingLabelText="Name"
    /><br/>
    <DrugPicker drug="Methadone" onPickDrug={() => console.log("tree")} />
    <DateSelector />
    <CarriesSelector />
  </section>
);
const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const ConfigureGeneralPage = connect(mapStateToProps, mapDispatchToProps)(ConfigureGeneralContainer);
export default ConfigureGeneralPage;