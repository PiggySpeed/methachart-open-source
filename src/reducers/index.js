import { createStore, combineReducers } from 'redux';

// Reducers
import Main from './main';
import LogBuilder from './logbuilder';

const store = createStore(
  combineReducers({
    Main,
    LogBuilder
  })
);
export default store;