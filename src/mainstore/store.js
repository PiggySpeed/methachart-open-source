import { createStore, combineReducers } from 'redux';

// Reducers
import MainReducer from 'modules/main/mainreducer';
import ConfigureGeneralReducer from 'modules/configuregeneral/configuregeneralreducer';

const store = createStore(
  combineReducers({
    MainReducer,
    ConfigureGeneralReducer
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);
export default store;