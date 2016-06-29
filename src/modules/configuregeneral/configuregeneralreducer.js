import * as types from './configuregeneralactions';
import { Map, fromJS } from 'immutable';
import moment from 'moment';
import { createDate, calculateInterval } from 'shared/utils/date';

const initialState = Map({
  name: "",
  drug: "Methadone",
  dose: 3,
  startdate: "",
  enddate: "",
  timeinterval: 0
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
        timeinterval: calculateInterval(action.startdate, action.enddate)
      })
    }
    default:
      return state
  }
};
export default ConfigureGeneralReducer;