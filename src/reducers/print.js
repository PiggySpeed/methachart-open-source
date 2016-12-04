import * as types from '../actions/print';

const printData = (state = {}, action) => {
  switch(action.type) {
    case types.ON_PRINT_REQUEST: {
      return {};
    }
    case types.ON_PRINT_FAILURE: {
      return {errorText: action.errorText};
    }
    case types.ON_PRINT_SUCCESS: {
      return {};
    }
    default:
      return state;
  }
};
export default printData;