import * as types from '../actions/logbuilder';

const initialState = {
  selecteddrug: {
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  },
  name: '',
  dose: '',
  takehome: '0',
  startdate: '',
  enddate: '',
  timeinterval: 0,
  maxinterval: 100
};

const LogBuilder = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_NAME_BLUR: {
      return {...state, name: action.name }
    }
    case types.ON_RXNUM_BLUR: {
      return {...state, rxnum: action.rxnum }
    }
    case types.ON_SET_DRUG: {
      return {...state, selecteddrug: action.selecteddrug }
    }
    case types.ON_DOSE_BLUR: {
      return {...state, dose: action.dose }
    }
    case types.ON_TAKEHOME_BLUR: {
      return {...state, takehome: action.takehome }
    }
    default:
      return state
  }
};
export default LogBuilder;
