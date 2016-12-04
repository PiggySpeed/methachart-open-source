import { calculateInterval, getAllDates } from '../utils/date';
import openWindow from '../utils/newwindow';
import { PRINT_URL } from '../utils/url';

const WEEKDAYS = {
  [0]: 'SUN',
  [1]: 'MON',
  [2]: 'TUE',
  [3]: 'WED',
  [4]: 'THU',
  [5]: 'FRI',
  [6]: 'SAT'
};

export const ON_PRINT_REQUEST = 'ON_PRINT_REQUEST';
export const ON_PRINT_FAILURE = 'ON_PRINT_FAILURE';
export const ON_PRINT_SUCCESS = 'ON_PRINT_SUCCESS';

const onPrintFailure = (errorText) => {
  return { type: ON_PRINT_FAILURE, errorText }
};
const onPrintSuccess = (headerdata, logdata) => {
  openWindow(PRINT_URL, {headerdata, logdata});
  //console.log(headerdata,logdata);
  return { type: ON_PRINT_SUCCESS }
};
export const onPrintRequest = () => {
  return (dispatch, getState) => {
    dispatch({ type: ON_PRINT_REQUEST });

    const { LogBuilder, dates } = getState();
    const { name, selecteddrug, rxnum, dose, takehome } = LogBuilder;
    const { startdate, enddate } = dates; // dates must be in form MMM DD, YYYY
    let errorText = 'The start or end dates are invalid.';

    const timeinterval = calculateInterval(startdate, enddate, 168, err => { errorText = err });
    if(timeinterval === 0){
      return dispatch(onPrintFailure(errorText))
    }

    const allDates = getAllDates(startdate, enddate, 168, err => { errorText = err });
    if(allDates.length === []){
      return dispatch(onPrintFailure(errorText))
    }

    // Assemble headerdata
    const headerdata = {
        name,
        selecteddrug,
        startdate,
        enddate,
        timeinterval
    };

    // Assemble logdata
    const logdata = [];
    for(var i = 0; i < allDates.length; i++ ) {
      logdata.push({
        date: allDates[i].date,
        weekday: WEEKDAYS[allDates[i].weekday],
        rxnum: rxnum,
        witness: dose,
        takehome: (takehome === 0) ? '-------' : takehome,
        total: dose,
        carry: !!takehome
      })
    }

    return dispatch(onPrintSuccess(headerdata, logdata))
  }
};