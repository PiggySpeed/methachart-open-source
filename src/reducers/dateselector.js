import * as types from '../actions/dateselector';

const initialState = {
  startdate: '',
  enddate: '',
  timeinterval: 0
};

const dates = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_SET_START_DATE: {
      return {...state, startdate: action.startdate}
    }
    case types.ON_SET_END_DATE: {
      return {...state, enddate: action.enddate}
    }
    case types.ON_SET_TIME_INTERVAL: {
      return {...state, timeinterval: action.timeinterval}
    }
    default:
      return state
  }
};
export default dates;
