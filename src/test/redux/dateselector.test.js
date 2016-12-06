import { expect } from 'chai';
import sinon from 'sinon';
import { testActionReducer, testThunk } from './testhelpers';
import * as actions from '../../actions/dateselector';
import dates from '../../reducers/dateselector';

const MOCK_DATA = {
  onSetDates: {
    returnTrue: [
      { args: ['01', '01', '17'], exp: 'Jan 01, 2017' },
      { args: ['9', '3', '18'], exp: 'Mar 09, 2018' },
      { args: ['29', '02', '20'], exp: 'Feb 29, 2020' }
    ],
    returnFalse: [
      { args: [1, 1, 17], exp: 'INVALID DATE' },
      { args: ['Jan', '01', '17'], exp: 'INVALID DATE' },
      { args: ['29', '02', '17'], exp: 'INVALID DATE' }
    ]
  },
  onSetTimeInterval: {
    returnTrue: [
      { args: ['Feb 07, 2020', 'Mar 05, 2020'], exp: 28 },
      { args: ['Jan 01, 2016', 'Feb 11, 2016'], exp: 42 },
      { args: ['Jan 01, 2016', 'Jan 01, 2016'], exp: 1 }
    ],
    returnFalse: [
      { args: ['Jan  1, 2016', 'Jan 01, 2016'], exp: 0 },
      { args: ['Jan 20, 2016', 'Jan 06, 2016'], exp: 0 },
      { args: ['Feb 20, 2019', 'Feb 29, 2019'], exp: 0 }
    ]
  }
};

describe('/reducers/dates.js', () => {


  // onSetStartDate
  it('should handle valid data for ON_SET_START_DATE', () => {
    MOCK_DATA.onSetDates.returnTrue.every( item => {
      const oldAction = actions.onSetStartDate(...item.args);
      const expAction = { type: actions.ON_SET_START_DATE, startdate: item.exp };

      testThunk(oldAction, expAction)
    });
  });
  it('should handle invalid data for ON_SET_START_DATE', () => {
    MOCK_DATA.onSetDates.returnFalse.every( item => {
      const oldAction = actions.onSetStartDate(...item.args);
      const expAction = { type: actions.ON_SET_START_DATE, startdate: item.exp };

      testThunk(oldAction, expAction)
    });
  });


  // onSetEndDate
  it('should handle valid data for ON_SET_END_DATE', () => {
    MOCK_DATA.onSetDates.returnTrue.every( item => {
      const oldAction = actions.onSetEndDate(...item.args);
      const expAction = { type: actions.ON_SET_END_DATE, enddate: item.exp };

      testThunk(oldAction, expAction)
    });
  });

  it('should handle invalid data for ON_SET_END_DATE', () => {
    MOCK_DATA.onSetDates.returnFalse.every( item => {
      const oldAction = actions.onSetEndDate(...item.args);
      const expAction = { type: actions.ON_SET_END_DATE, enddate: item.exp };

      testThunk(oldAction, expAction)
    });
  });


  // onSetTimeInterval
  it('should handle valid data for ON_SET_TIME_INTERVAL', () => {
    MOCK_DATA.onSetTimeInterval.returnTrue.every( item => {
      const oldAction = actions.onSetTimeInterval(...item.args);
      const expAction = { type: actions.ON_SET_TIME_INTERVAL, timeinterval: item.exp };
      const getState = () => ({ dates: {...item.args} });

      testThunk(oldAction, expAction, getState)
    });
  });

  it('should handle invalid data for ON_SET_TIME_INTERVAL', () => {
    MOCK_DATA.onSetTimeInterval.returnFalse.every( item => {
      const oldAction = actions.onSetTimeInterval(...item.args);
      const expAction = { type: actions.ON_SET_TIME_INTERVAL, timeinterval: item.exp };
      const getState = () => ({ dates: {...item.args} });

      testThunk(oldAction, expAction, getState)
    });
  });


});
