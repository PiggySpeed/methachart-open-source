import * as types from './configuregeneralactions';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
  drug: "Methadone",
  selecteddrug: { displayname: "Methadone",   drugname: "Methadone 10mg/ml",  din: "02394596", pseudodin: "66999997" },
  druglist: List([
    { displayname: "Methadone",   drugname: "Methadone 10mg/ml",  din: "02394596", pseudodin: "66999997" },
    { displayname: "Kadian",      drugname: "Kadian 10 mg",       din: "02184435", pseudodin: "02184435" },
    { displayname: "Suboxone",    drugname: "Suboxone 2/0.5 mg",  din: "02295695", pseudodin: "02295695" }])
});

const ConfigureGeneralReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_PICK_DRUG: {
      return state.merge({
        drug: action.drug
      })
    }
    case types.ON_SET_DRUG: {
      console.log(action.din);
      return state.merge({
        selecteddrug: state.druglist.filter((x) => x.din == action.din)
      })
    }
    default:
      return state
  }
};
export default ConfigureGeneralReducer;