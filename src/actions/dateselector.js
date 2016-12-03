export const ON_SET_START_DATE = "ON_SET_START_DATE";
export const ON_SET_END_DATE = "ON_SET_END_DATE";
export const ON_SET_TIME_INTERVAL = "ON_SET_TIME_INTERVAL";

export const onSetStartDate = (startdate) => {
  return dispatch => {
    dispatch({ type: ON_SET_START_DATE, startdate })
  }
};
export const onSetEndDate = (enddate) => {
  return dispatch => {
    dispatch({ type: ON_SET_END_DATE, enddate })
  }
};
export const onSetTimeInterval = (startdate, enddate, maxinterval) => {
  return dispatch => {
    dispatch({ type: ON_SET_TIME_INTERVAL, startdate, enddate, maxinterval })
  }
};
