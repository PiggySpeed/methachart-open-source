import * as types from '../actions/print';

const printData = (state = { errorText: '' }, action) => {
  switch(action.type) {
    case types.ON_DELETE_PRINT_ERROR: {
      return { errorText: '' };
    }
    case types.ON_PRINT_REQUEST: {
      return { errorText: '' };
    }
    case types.ON_PRINT_FAILURE: {
      return { errorText: action.errorText };
    }
    case types.ON_PRINT_SUCCESS: {
      return { errorText: '' };
    }
    default:
      return state;
  }
};
export default printData;