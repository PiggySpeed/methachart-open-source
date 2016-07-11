import * as types from './configurespecificactions';
import { Map, List, fromJS } from 'immutable';
import { getAllDates } from 'shared/utils/date';

const initialState = Map({
  name: "",
  drug: { displayname: "Methadone",   drugname: "Methadone 10mg/ml",  din: "02394596", pseudodin: "66999997" },
  dose: 0,
  logdata: List([
    {
      date: "June 5, 2016",
      rx: "30224",
      witness: "6 mL",
      takehome: "3 mL",
      total: "9 mL",
      carry: false
    }
  ])
});

const ConfigureSpecificReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_NAME_BLUR: {
      return state.merge({
        name: action.name
      })
    }
    case types.ON_DRUG_BLUR: {
      return state.merge({
        drug: action.drug
      })
    }
    case types.ON_DOSE_BLUR: {
      return state.merge({
        dose: action.dose
      })
    }
    case types.ON_BUILD_LOG: {
      var newLog = [];
      var dates = getAllDates(action.startdate, action.enddate);
      for(var i = 0; i <= dates.length-1; i++ ) {
        newLog.push({
          date: dates[i],
          rx: "30224",
          witness: state.get("dose"),
          takehome: "-------",
          total: state.get("dose"),
          carry: false
        })
      }
      return state.merge({
        logdata: List(newLog)
      })
    }
    case types.ADD_LOG_ENTRY: {
      var newList = [];
      return state.merge({
        logdata: newList
      })
    }
    default:
      return state
  }
};
export default ConfigureSpecificReducer;