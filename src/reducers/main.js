import * as types from './../actions/mainactions';

const initialState = {
  pig: "hi"
};

const Main = (state = initialState, action) => {
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
export default Main;