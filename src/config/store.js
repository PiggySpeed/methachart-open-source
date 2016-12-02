import { createStore, combineReducers } from 'redux';

// Reducers
import MainReducer from 'modules/main/mainreducer';
import ConfigureGeneralReducer from 'modules/configuregeneral/configuregeneralreducer';
import ConfigureSpecificReducer from 'modules/configurespecific/configurespecificreducer';

const store = createStore(
  combineReducers({
    MainReducer,
    ConfigureGeneralReducer,
    ConfigureSpecificReducer
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);
export default store;