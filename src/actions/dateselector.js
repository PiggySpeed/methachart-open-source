import { createDate, calculateInterval, getAllDates } from '../utils/date';

export const ON_SET_START_DATE = 'ON_SET_START_DATE';
export const ON_SET_END_DATE = 'ON_SET_END_DATE';
export const ON_SET_TIME_INTERVAL = 'ON_SET_TIME_INTERVAL';

export const onSetStartDate = (ddmmyy) => {
  return dispatch => {
    // Date validation occurs in createDate
    const startdate = createDate(ddmmyy[0], ddmmyy[1], ddmmyy[2]);
    dispatch({ type: ON_SET_START_DATE, startdate })
  }
};
export const onSetEndDate = (ddmmyy) => {
  return dispatch => {
    // Date validation occurs in createDate
    const enddate = createDate(ddmmyy[0], ddmmyy[1], ddmmyy[2]);
    dispatch({ type: ON_SET_END_DATE, enddate })
  }
};
export const onSetTimeInterval = () => {
  return (dispatch, getState) => {
    const { dates } = getState();

    // date validation occurs in calculateInterval, returns 0 if invalid
    const timeinterval = calculateInterval(dates.startdate, dates.enddate, 168);
    dispatch({
      type: ON_SET_TIME_INTERVAL,
      timeinterval
    })
  }
};
