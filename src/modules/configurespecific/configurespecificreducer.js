import * as types from './configurespecificactions';
import { Map, fromJS } from 'immutable';
import { createDate, getAllDates } from 'shared/utils/date';


const initialState = Map({
  name: "",
  logdata: [
    {
      date: "June 5, 2016",
      witness: "6 mL",
      takehome: "3 mL",
      total: "9 mL",
      active: "true"
    }
  ],
  dates: [

  ]
});

const ConfigureSpecificReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_NAME_BLUR: {
      return state.merge({
        name: action.name
      })
    }
    case types.ON_BUILD_LOG: {
      getAllDates(action.startdate, action.enddate);
      var newList1 = [];
      return state.merge({
        dates: newList1
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