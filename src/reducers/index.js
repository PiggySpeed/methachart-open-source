import { createStore, combineReducers } from 'redux';

// Reducers
import Main from './main';
import LogBuilder from './logbuilder';
import DateSelector from './dateselector';

const store = createStore(
  combineReducers({
    Main,
    LogBuilder,
    DateSelector
  })
);
export default store;