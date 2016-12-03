import * as types from '../actions/dateselector';
import { Map, List, fromJS } from 'immutable';
import { createDate, calculateInterval, getAllDates } from 'shared/utils/date';

const initialState = Map({
  startdate: "",
  enddate: "",
  timeinterval: 0,
  maxinterval: 100
});

const LogBuilder = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state
  }
};
export default LogBuilder;
