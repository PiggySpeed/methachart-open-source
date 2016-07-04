import * as types from './configuregeneralactions';
import { Map, List, fromJS } from 'immutable';
import moment from 'moment';
import { createDate, calculateInterval } from 'shared/utils/date';

const initialState = Map({
  name: "",
  drug: "Methadone",
  dose: 3,
  startdate: "",
  enddate: "",
  timeinterval: 0,
  maxinterval: 100,
  selecteddrug: { displayname: "Methadone",   drugname: "Methadone 10mg/ml",  din: "02394596", pseudodin: "66999997" },
  druglist: List([
    { displayname: "Methadone",   drugname: "Methadone 10mg/ml",  din: "02394596", pseudodin: "66999997" },
    { displayname: "Kadian",      drugname: "Kadian 10 mg",       din: "02184435", pseudodin: "02184435" },
    { displayname: "Suboxone",    drugname: "Suboxone 2/0.5 mg",  din: "02295695", pseudodin: "02295695" }])
});

const ConfigureGeneralReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_NAME_BLUR: {
      return state.merge({
        name: action.name
      })
    }
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
    case types.ON_DOSE_BLUR: {
      return state.merge({
        dose: action.dose
      })
    }
    case types.ON_SET_START_DATE: {
      return state.merge({
        startdate: createDate(action.startdate[0], action.startdate[1], action.startdate[2])
      })
    }
    case types.ON_SET_END_DATE: {
      return state.merge({
        enddate: createDate(action.enddate[0], action.enddate[1], action.enddate[2])
      })
    }
    case types.ON_SET_TIME_INTERVAL: {
      return state.merge({
        timeinterval: calculateInterval(action.startdate, action.enddate, action.maxinterval)
      })
    }
    case types.ON_SET_MAX_INTERVAL: {
      return state.merge({
        maxinterval: action.maxinterval
      })
    }
    default:
      return state
  }
};
export default ConfigureGeneralReducer;