import { expect } from 'chai';
import sinon from 'sinon';
import {
  createDate,
  calculateInterval,
  getAllDates
} from '../utils/date.js';

const MOCK_DATA = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  falsy: ['', null, undefined, 0, {}, NaN],
  isString: {
    returnFalse: [null, undefined, 0, {}, NaN, []],
    returnTrue: ['', 'x']
  },
  calculateInterval: {
    returnFalse: [
     ['Jan 1, 2016', 'Jan 01, 2016', 112], // date format invalid
     ['Jan  1, 2016', 'Jan 01, 2016', 112], // date format invalid
     ['Jan 01, 2016', 'Jan 01, 2016', 0], // maxinterval invalid
     ['Jan 01, 2016', 'Jan 01, 2016', -2], // maxinterval invalid
     ['Jan 01, 2016', 'Feb 11, 2016', 28], // exceeds interval
     ['Jan 01, 2016', 'Feb 11, 2020', 600], // maxinterval cannot exceed 365 days
     ['Jan 20, 2016', 'Jan 06, 2016', 112], // end is before start
     ['Jan 20, 2018', 'Dec 20, 2016', 112], // end is before start
     ['Jan 18, 2016', 'Jan 17, 2016', 112], // end is before start
     ['Jan 18, 2016', 'Jan 17, 2016', 2], // end is before start
    ],
    returnTrue: [
      { args: ['Jan 01, 2016', 'Jan 01, 2016', 1], interval: 1 },
      { args: ['Jan 01, 2016', 'Jan 02, 2016', 2], interval: 2 },
      { args: ['Jan 01, 2016', 'Jan 01, 2016', 112], interval: 1 },
      { args: ['Feb 29, 2020', 'Feb 29, 2020', 112], interval: 1 }, // leap year
      { args: ['Feb 29, 2020', 'Mar 01, 2020', 112], interval: 2 }, // leap year
      { args: ['Jan 01, 2016', 'Jan 07, 2016', 112], interval: 7 },
      { args: ['Jan 01, 2016', 'Jan 14, 2016', 112], interval: 14 },
      { args: ['Feb 07, 2020', 'Mar 05, 2020', 112], interval: 28 }, // leap year
      { args: ['Feb 07, 2020', 'Mar 05, 2020', 28], interval: 28 }, // leap year
      { args: ['Jan 01, 2016', 'Feb 11, 2016', 112], interval: 42 },
      { args: ['Dec 18, 2016', 'Feb 11, 2017', 112], interval: 56 },
      { args: ['Dec 18, 2016', 'Feb 11, 2017', 56], interval: 56 },
      { args: ['Dec 18, 2016', 'Dec 17, 2017', 365], interval: 365 }
    ]
  },
  createDate: {
    returnFalse: [
      [null, '01','17'],
      ['', '01','17'],
      [undefined, '01','17'],
      [0, '01','17'],
      [{}, '01','17'],
      [NaN, '01','17'],
      [['1'], '01','17'],
      ['00', '00','00'],
      ['00', '00'],
      ['00'],
      [''],
      [],
      ['00', '00','00'],
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
      ['1', '1', '17'],
      ['1', '05', '17'],
      ['03', '1', '17'],
      ['01', '01', '17'],
      ['12', '12', '17'],
      ['12', '12', '17'],
      ['28', '02', '17'],
      ['28', '02', '18'],
      ['28', '02', '19'],
      ['29', '02', '20']
    ]
  }
};

describe('/utils/date.js', () => {

  describe('createDate():', () => {

    it('should correctly convert \'dd mm yy\' into \'MMM DD, YYYY\'', () => {
      const checkTrue = MOCK_DATA.createDate.returnTrue.every( item => {
        const date = createDate(...item);
        const isString = Object.prototype.toString.call(date) === '[object String]';
        const isCorrectLength = date.length === 12;

        const dateInArray = date.split(' ');
        const areCorrectLengths = (
          (dateInArray[0].length === 3) &&
          (dateInArray[1].length === 3) && //accounting for the comma
          (dateInArray[2].length === 4)
        );
        const monthIsValid = MOCK_DATA.months.includes(dateInArray[0]);

        const day = dateInArray[0].replace(',', '');
        const dayStr = (day.startsWith('0') ? day.slice(1) : day);
        const dayIsNumber = Object.prototype.toString.call(+dayStr) === '[object Number]';

        const result = (isString && isCorrectLength && areCorrectLengths && monthIsValid && dayIsNumber);

        if(!result){
          console.log('TEST [true] FAILED AT: ', item, isString, isCorrectLength, areCorrectLengths, monthIsValid, dayIsNumber)
        }
        return result;
      });

      expect(checkTrue).to.equal(true);
    });

    it('should return \'INVALID DATE\' for invalid input', () => {
      const checkFalse = MOCK_DATA.createDate.returnFalse.every( item => {
        return createDate(...item) === 'INVALID DATE';
      });

      expect(checkFalse).to.equal(true);
    });

    // Check if Parsing is Correct
    it('should return \'Feb 01, 2016\' for input [\'1\', \'2\', \'16\']', () => {
      const isValid = createDate('1', '1', '16') === 'Jan 01, 2016';

      expect(isValid).to.equal(true);
    });

    it('should return \'Mar 31, 2017\' for input [\'31\', \'03\', \'17\']', () => {
      const isValid = createDate('31', '03', '17') === 'Mar 31, 2017';

      expect(isValid).to.equal(true);
    });

    it('should return \'Feb 29, 2020\' for input [\'29\', \'02\', \'20\']', () => {
      const isValid = createDate('29', '02', '20') === 'Feb 29, 2020';

      expect(isValid).to.equal(true);
    });

    it('should return \'INVALID DATE\' for input [\'29\', \'02\', \'19\']', () => {
      const isValid = createDate('29', '02', '19') === 'INVALID DATE';

      expect(isValid).to.equal(true);
    });

  });

  describe('calculateInterval():', () => {
    it('should return the correct number of days between two dates, inclusive', () => {
      const checkTrue = MOCK_DATA.calculateInterval.returnTrue.every( item => {
        return calculateInterval(...item.args) === item.interval
      });

      expect(checkTrue).to.equal(true);
    });
    it('should return an error message when the dates or interval are invalid', () => {
      const errcb = sinon.spy();

      const checkFalse = MOCK_DATA.calculateInterval.returnFalse.every( item => {
        return (calculateInterval(...item, errcb) === 0);
      });

      sinon.assert.callCount(errcb, MOCK_DATA.calculateInterval.returnFalse.length);
      expect(checkFalse).to.equal(true);
    })
  });

  describe('getAllDates():', () => {
    it('should return an array of all dates between two specified dates', () => {
      expect(getAllDates("Jan 01, 2016", "Jan 03, 2016")).to.have.same.members(["Jan 01, 2016", "Jan 02, 2016", "Jan 03, 2016"])
    });
    it('should return an error message when the startdate comes after the enddate', () => {
      expect(getAllDates("Jan 03, 2016", "Jan 01, 2016")).to.have.same.members(["Error: enddate should be after startdate"])
    })
  });

});
