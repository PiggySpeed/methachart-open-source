import { combineReducers } from 'redux';

import LogBuilder from './logbuilder';
import dates from './dateselector';
import printData from './print';

const rootReducer = combineReducers({
  LogBuilder,
  dates,
  printData
});
export default rootReducer;