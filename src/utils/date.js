'use strict';
import moment from 'moment';

const pad = (n) => {
  /**
   * Returns values with a leading zero, up to a max of 2 digits
   *
   * n (str): the single or double-digit value
   * **/
  return (n < 10 && n.length == 1) ? '0'+n : n
};

export const createDate = ( dd, mm, yy ) => {
  /**
   * Returns dates in a format MMM DD, YYYY (as a string)
   *
   * dd (str): days (1-31)
   * mm (str): months (1-12)
   * yy (str): years
   * **/
  return moment((pad(dd) + '/' + pad(mm) + '/20' + pad(yy)), 'DD/MM/YYYY', true).format('MMM DD, YYYY');
};

export const calculateInterval = ( startdate, enddate, maxinterval ) => {
  /**
   * Returns the number of days between startdate and enddate, inclusive
   *
   * startdate (str): start of interval in the format "MMM DD, YYYY"
   * enddate (str): end of interval in the format "MMM DD, YYYY"
   * maxinterval (int): the max range of days that is allowed be displayed (to prevent ridiculous values like 1000days)
   *
   * **/
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true);
  var calculateddifference = end.diff(start, 'days')+1; //need to add 1 to include end date
  return calculateddifference >= 0 && calculateddifference <= maxinterval ? calculateddifference : "Invalid Date Range";
};

export const getAllDates = ( startdate, enddate ) => {
  /**
   * Returns an array of all dates between startdate and enddate, inclusive
   *
   * startdate (str): start date in format "MMM DD, YYYY"
   * enddate (str): end date in format "MMM DD, YYYY"
   *
   * **/
  var dates = [];
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true).add(1, 'days'); //need to add 1 day to be inclusive
  if(end.isAfter(start)){
    for (var i = moment(start); i.isBefore(end); i.add(1, 'days')) {
      dates.push(i.format('MMM DD, YYYY'));
    }
    return dates;
  } else {
    return ["Error: enddate should be after startdate"]
  }
};