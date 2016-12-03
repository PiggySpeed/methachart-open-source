import { expect } from 'chai';
import {
  isString,
  isNonEmptyString,
  isValidDateDDMMYY,
  isValidDateMMMDDYYYY
} from '../utils/typechecking.js';

const MOCK_DATA = {
  falsy: ['', null, undefined, 0, {}, NaN],
  isString: {
    returnFalse: [null, undefined, 0, {}, NaN, []],
    returnTrue: ['', 'x']
  },
  isNonEmptyString: {
    returnFalse: ['', ' ', '  ', null, undefined, 0, {}, NaN, []],
    returnTrue: ['x', 'null', 'undefined', 'NaN', '0', ' tree', 'bear ', '  pig  ']
  },
  isValidDateDDMMYY: {
    returnFalse: [
      [null, '01','17'],
      ['', '01','17'],
      [undefined, '01','17'],
      [0, '01','17'],
      [{}, '01','17'],
      [NaN, '01','17'],
      [['02'], '01','17'],
      ['00', '00','00'],
      ['00', '00'],
      ['00'],
      [''],
      [],
      ['99', '99','99'],
      ['000', '00','00'],
      ['XX', 'YY','ZZ'],
      ['0X', '2E','1F'],
      [3, 11, 16],
      [15, 10, 17],
      [20, 40, 60],
      [20, 40, 60],
      ['12', '13','16'],
      ['34', '12','16'],
      ['29', '02','17'], // Leap Year
      ['01', 'JAN','17'],
      ['01', '02','2017'],
      ['01', '001','17'],
      ['01', '00','17'],
      ['00', '00','17'],
      [' 1', ' 2','17'],
      ['  ', '03','17'],
      ['01  ', '02 ','17'],
      ['01  ', '02 ','17']
    ],
    returnTrue: [
      ['01', '01', '17'],
      ['12', '12', '17'],
      ['12', '12', '17'],
      ['28', '02', '17'],
      ['28', '02', '18'],
      ['28', '02', '19'],
      ['29', '02', '20']
    ]
  },
  isValidDateMMMDDYYYY: {
    returnFalse: [
      null,
      '',
      undefined,
      0,
      1,
      NaN,
      ' ',
      [],
      ['Jan', '13','2016'],
      'flubber',
      'Jan1,2016',
      'Jan 1,2016',
      'Jan 1, 2016',
      'Jan -1, 2016',
      'Jan `1, 2016',
      'Jan +1, 2016',
      'Jan 00, 2016',
      'Jan 1, 22016',
      'Janu 1, 2016',
      'Jan 01, 2016 ',
      'Jan 01, 2016 ',
      'Jan  01, 2016',
      ' Jan 01, 2016',
      'Jan  01, 2016',
      'Jan 01, 16',
      'Jan 1, 19',
      'Jan 32, 2017',
      'Feb 29, 2019',
      'Feb 30, 2020',
      'January 30, 2016',
      'Jan 1, 2017 Sun',
      'Jan 1, 2016 Sun'
    ],
    returnTrue: [
      'Jan 01, 2017',
      'Mar 10, 2017',
      'JAN 01, 2017',
      'Feb 29, 2020'
    ]
  }
};

describe('/utils/typechecking.js', () => {

  describe('isString():', () => {
    it('should return false for an invalid string', () => {
      const checkFalse = MOCK_DATA.isString.returnFalse.every( item => {
        return (isString(item) === false);
      });

      expect(checkFalse).to.equal(true);
    });
    it('should return true for a valid string', () => {
      const checkTrue = MOCK_DATA.isString.returnTrue.every( item => {
        return (isString(item) === true);
      });

      expect(checkTrue).to.equal(true);
    })
  });

  describe('isNonEmptyString():', () => {
    it('should return false for an empty string or non-string value', () => {
      const checkFalse = MOCK_DATA.isNonEmptyString.returnFalse.every( item => {
        return (isNonEmptyString(item) === false);
      });

      expect(checkFalse).to.equal(true);
    });
    it('should return false for an empty string or non-string value', () => {
      const checkTrue = MOCK_DATA.isNonEmptyString.returnTrue.every( item => {
        return (isNonEmptyString(item) === true);
      });

      expect(checkTrue).to.equal(true);
    })
  });

  describe('isValidDateDDMMYY():', () => {
    it('should return false for invalid dates', () => {
      const checkFalse = MOCK_DATA.isValidDateDDMMYY.returnFalse.every( item => {
        return (isValidDateDDMMYY(...item) === false);
      });

      expect(checkFalse).to.equal(true);
    });
    it('should return true for all valid dates', () => {
      const checkTrue = MOCK_DATA.isValidDateDDMMYY.returnTrue.every( item => {
        return (isValidDateDDMMYY(...item) === true);
      });

      expect(checkTrue).to.equal(true);
    })
  });

  describe('isValidDateMMMDDYYYY():', () => {
    it('should return false for invalid dates', () => {
      const checkFalse = MOCK_DATA.isValidDateMMMDDYYYY.returnFalse.every( item => {
        return (isValidDateMMMDDYYYY(item) === false);
      });

      expect(checkFalse).to.equal(true);
    });
    it('should return true for all valid dates', () => {
      const checkTrue = MOCK_DATA.isValidDateMMMDDYYYY.returnTrue.every( item => {
        return (isValidDateMMMDDYYYY(item) === true);
      });

      expect(checkTrue).to.equal(true);
    })
  });

});