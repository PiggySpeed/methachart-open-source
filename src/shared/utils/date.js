'use strict';
import moment from 'moment';

const pad = (n) => {
  /** Returns values with a leading zero, up to a max of 2 digits **/
  return (n < 10 && n.length == 1) ? '0'+n : n
};

export const createDate = ( dd, mm, yy ) => {
  /** Returns dates in a format MMM DD, YYYY **/
  return moment((pad(dd) + '/' + pad(mm) + '/20' + pad(yy)), 'DD/MM/YYYY', true).format('MMM DD, YYYY');
};

export const formatDate = ( dd, mm, yy) => {
  return moment((pad(dd) + '/' + pad(mm) + '/20' + pad(yy)), 'DD/MM/YYYY', true).format('MMM DD, YYYY');
};

export const calculateInterval = ( startdate, enddate ) => {
  /** Returns the number of days between startdate and enddate, inclusive **/
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true);
  return end.diff(start, 'days') + 1; //need to add 1 to include end date
};

export const getAllDates = ( startdate, enddate ) => {
  /** Returns an array of all dates between startdate and enddate, inclusive **/
  var dates = [];
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true).add(1, 'days'); //need to add 1 day
  for (var i = moment(start); i.isBefore(end); i.add(1, 'days')) {
    dates.push(i.format('MMM DD, YYYY'));
  }
  return dates;
};