'use strict';
import moment from 'moment';

const pad = (n) => {
  return (n < 10 && n.length == 1) ? '0'+n : n
};

export const createDate = ( dd, mm, yy ) => {
  return moment((pad(dd) + '/' + pad(mm) + '/20' + pad(yy)), 'DD/MM/YYYY', true).format('MMM DD, YYYY');
};

export const formatDate = ( dd, mm, yy) => {
  return moment((pad(dd) + '/' + pad(mm) + '/20' + pad(yy)), 'DD/MM/YYYY', true).format('MMM DD, YYYY');
};

export const calculateInterval = ( startdate, enddate ) => {
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true);
  return end.diff(start, 'days') + 1; //need to add 1 to include end date
};

export const getAllDates = ( startdate, enddate ) => {
  var dates = [];
  var start = moment(startdate, 'MMM DD, YYYY', true);
  var end = moment(enddate, 'MMM DD, YYYY', true);
  for (var i = moment(start); i.isBefore(end); i.add(1, 'days')) {
    console.log(m.format('YYYY-MM-DD'));
  }
};