import { createStore, combineReducers } from 'redux';

// Reducers
import MainReducer from 'modules/main/mainreducer';

const store = createStore(
  combineReducers({
    MainReducer
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);
export default store;