'use strict';
import moment from 'moment';
import { isNonEmptyString, isValidDateDDMMYY, isValidDateMMMDDYYYY } from './typechecking';

const pad = (n) => {
  /**
   * Returns values with a leading zero, up to a max of 2 digits
   * coerces numbers to string
   *
   * n (str or num): the single or double-digit value
   * **/
  return (+n < 10 && n.length === 1) ? '0'+n : n
};

export const createDate = ( dd, mm, yy ) => {
  /**
   * Returns dates in a format MMM DD, YYYY (as a string)
   * will pad incoming values with '0', up to length 2
   * (e.g. 1 => 01)
   *
   * dd (str): days (1-31)
   * mm (str): months (1-12)
   * yy (str): years
   * **/
  const areAllValidStrings = (
    isNonEmptyString(dd) &&
    isNonEmptyString(mm) &&
    isNonEmptyString(yy)
  );
  if(!areAllValidStrings){
    return 'INVALID DATE'
  }

  const paddedDate = [pad(dd), pad(mm), pad(yy)];

  if(!isValidDateDDMMYY(...paddedDate)){
    return 'INVALID DATE';
  }

  return moment(paddedDate.join(' '), 'DD MM YY', true).format('MMM DD, YYYY');
};

export const calculateInterval = ( startdate, enddate, maxinterval, errcb ) => {
  /**
   * Returns the number of days between startdate and enddate, inclusive
   * If an error occurs, invoke the error callback and return 0
   * If the start and end dates are identical, return 1 (to represent 1 day duration)
   *
   * startdate (str): start of interval in the format "MMM DD, YYYY"
   * enddate (str): end of interval in the format "MMM DD, YYYY"
   * maxinterval (int, 1-365): the max range of days that is allowed be displayed (to prevent ridiculous values like 1000days)
   * errcb (func, optional): error callback to invoke if dates or interval is invalid
   *
   * Returns an int
   * **/

  if(maxinterval < 1){
    errcb
      ? errcb('MAX INTERVAL CANNOT BE BELOW 1')
      : console.warn('MAX INTERVAL CANNOT BE BELOW 1');
    return 0
  }

  if(maxinterval > 365){
    errcb
      ? errcb('MAX INTERVAL CANNOT BE ABOVE 365 DAYS')
      : console.warn('MAX INTERVAL CANNOT BE ABOVE 365 DAYS');
    return 0
  }

  const datesAreValid = isValidDateMMMDDYYYY(startdate) && isValidDateMMMDDYYYY(enddate);
  if(!datesAreValid){
    errcb
      ? errcb('INVALID DATE(S)')
      : console.warn('INVALID DATE(S)');
    return 0
  }

  const start = moment(startdate, 'MMM DD, YYYY', true);
  const end = moment(enddate, 'MMM DD, YYYY', true);

  if(end.isSame(start)){
    return 1
  }

  if(!end.isAfter(start)){
    errcb
      ? errcb('END DATE CANNOT PRECEDE START DATE')
      : console.warn('END DATE CANNOT PRECEDE START DATE');
    return 0
  }

  const calculatedInterval = end.diff(start, 'days') + 1; //need to add 1 to include end date
  if(calculatedInterval > maxinterval){
    errcb
      ? errcb(`TIME INTERVAL IS TOO LARGE: ${calculatedInterval} DAYS`)
      : console.warn(`TIME INTERVAL IS TOO LARGE: ${calculatedInterval} DAYS`);
    return 0
  }

  return calculatedInterval;
};

export const getAllDates = ( startdate, enddate, maxinterval, errcb ) => {
  /**
   * Returns an array of all dates between startdate and enddate, inclusive
   * Returns all dates in the format { date: 'MMM DD, YYYY, weekday: 'e' }
   * Returns an empty array if the dates or interval are invalid
   *
   * startdate (str): start date in format 'MMM DD, YYYY'
   * enddate (str): end date in format 'MMM DD, YYYY'
   * maxinterval (int, 1-365): the max range of days that is allowed be displayed (to prevent ridiculous values like 1000days)
   * errcb (func): error callback
   *
   * **/

  if(maxinterval < 1){
    errcb
      ? errcb('MAX INTERVAL CANNOT BE BELOW 1')
      : console.warn('MAX INTERVAL CANNOT BE BELOW 1');
    return []
  }

  if(maxinterval > 365){
    errcb
      ? errcb('MAX INTERVAL CANNOT BE ABOVE 365 DAYS')
      : console.warn('MAX INTERVAL CANNOT BE ABOVE 365 DAYS');
    return []
  }

  const datesAreValid = isValidDateMMMDDYYYY(startdate) && isValidDateMMMDDYYYY(enddate);
  if(!datesAreValid){
    errcb
      ? errcb('INVALID DATE(S)')
      : console.warn('INVALID DATE(S)');
    return [];
  }

  const dates = [];
  const start = moment(startdate, 'MMM DD, YYYY', true);
  const end = moment(enddate, 'MMM DD, YYYY', true);

  if(end.isSame(start)){
    return [{date: start.format('MMM DD, YYYY'), weekday: start.format('e')}];
  }

  if(!end.isAfter(start)){
    errcb
      ? errcb('END DATE CANNOT PRECEDE START DATE')
      : console.warn('END DATE CANNOT PRECEDE START DATE');
    return [];
  }

  // for the purposes of this loop, we need to account for the inclusion of the end date
  const inclusiveEnd = end.add(1, 'days');
  for(let date = start; date.isBefore(inclusiveEnd); date.add(1, 'days')) {

    dates.push({
      date: date.format('MMM DD, YYYY'),
      weekday: date.format('e')
    });
  }

  if(dates.length > maxinterval){
    errcb
      ? errcb(`NUMBER OF DATES CANNOT EXCEED MAX INTERVAL: ${maxinterval}`)
      : console.warn(`NUMBER OF DATES CANNOT EXCEED MAX INTERVAL:
      GOT: ${dates.length} MAX: ${maxinterval} DATES:
       ${start.format('MMM DD, YYYY')}
      ${end.format('MMM DD, YYYY')} ${startdate} ${enddate}`);
    return [];
  }

  return dates;

};