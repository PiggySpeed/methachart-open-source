import * as types from './myactions';

const initialState = {
  pig: "hi"
};

const MyReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_CLICK: {
      return {
        ...state,
        pig: action.text
      }
    }
    default:
      return {...state}
  }
};
export default MyReducer;