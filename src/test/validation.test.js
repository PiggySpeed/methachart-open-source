import { expect } from 'chai';
import {
  isStringPosNum
} from '../utils/validation.js';

const MOCK_DATA = {
  falsy: ['', null, undefined, 0, {}, NaN],
  isStringPosNum: {
    returnFalse: [
      '',
      null,
      true,
      false,
      undefined,
      {},
      NaN,
      [],
      0,
      0.5,
      1.1,
      1,
      99,
      '-0.1',
      '-1',
      '-99',
      'one',
      'AA',
      '1A',
      '-',
      '',
      '  ',
      '\n\r',
      '\t\t'
    ],
    returnTrue: [
      '+0',
      '-0',
      '00',
      '01',
      '+0.1',
      '0',
      '1',
      '99',
      '0.5',
      '0.1',
      '10.5',
      '10.0',
      '5000'
    ]
  }
};

describe('/utils/validation.js', () => {

  describe('isStringPosNum():', () => {
    it('should return false for an invalid string', () => {
      const checkFalse = MOCK_DATA.isStringPosNum.returnFalse.every( item => {
        if((isStringPosNum(item) === true)){ console.log('failed at ', item)}
        return (isStringPosNum(item) === false);
      });

      expect(checkFalse).to.equal(true);
    });
    it('should return true for a valid string', () => {
      const checkTrue = MOCK_DATA.isStringPosNum.returnTrue.every( item => {
        return (isStringPosNum(item) === true);
      });

      expect(checkTrue).to.equal(true);
    })
  });


});