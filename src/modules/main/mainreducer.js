import * as types from './mainactions';

const initialState = {
  pig: "hi"
};

const MainReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ON_CLICK: {
      console.log("reducer ", action.text);
      return {
        ...state,
        pig: action.text
      }
    }
    default:
      return {...state}
  }
};
export default MainReducer;