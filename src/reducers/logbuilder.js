import * as types from './../actions/configurespecificactions';
import { Map, List, fromJS } from 'immutable';
import { getAllDates } from 'shared/utils/date';
import { createDate, calculateInterval } from 'shared/utils/date';

const initialState = Map({
  selecteddrug: {
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  },
  druglist: List([{
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  }]),

  name: "",
  drug: {
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  },
  dose: 0,
  startdate: "",
  enddate: "",
  timeinterval: 0,
  maxinterval: 100,
  logdata: List([
    {
      date: "", //"June 5, 2016"
      rxnum: "", //"30224"
      witness: "", //"6 mL"
      takehome: "", //"3 mL"
      total: "", //"9 mL"
      carry: false
    }
  ])
});

const ConfigureSpecificReducer = (state = initialState, action) => {
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
    case types.ON_NAME_CHANGE: {
      return state.merge({
        name: action.name
      })
    }
    case types.ON_RXNUM_CHANGE: {
      return state.merge({
        rxnum: action.rxnum
      })
    }
    case types.ON_DRUG_BLUR: {
      return state.merge({
        drug: action.drug
      })
    }
    case types.ON_DOSE_CHANGE: {
      console.log("new dose is ", action.dose);
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
          rxnum: state.get("rxnum"),
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
export default ConfigureSpecificReducer;

//case types.ADD_LOG_ENTRY: {
//  var newList = [];
//  return state.merge({
//    logdata: newList
//  })
//}