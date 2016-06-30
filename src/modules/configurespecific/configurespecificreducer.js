import * as types from './configurespecificactions';
import { Map, List, fromJS } from 'immutable';
import { getAllDates } from 'shared/utils/date';

const initialState = Map({
  name: "",
  logdata: List([
    {
      date: "June 5, 2016",
      witness: "6 mL",
      takehome: "3 mL",
      total: "9 mL",
      active: "true"
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
    case types.ON_BUILD_LOG: {
      var newLog = [];
      var dates = getAllDates(action.startdate, action.enddate);
      console.log("date length is ", dates.length);
      for(var i = 0; i <= dates.length-1; i++ ) {
        newLog.push({
          date: dates[i],
          witness: "6 mL",
          takehome: "3 mL",
          total: "9 mL",
          active: "true"
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