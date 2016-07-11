import chai from 'chai';
import { createDate, calculateInterval, getAllDates } from './../shared/utils/date.js';
const expect = chai.expect;

describe('Date Functions', () => {
  describe('createDate', () => {
    it('should correctly convert \"dd, mm, yy\" into \"MMM DD, YYYY\"', () => {
      expect(createDate("1", "1", "16")).to.equal("Jan 01, 2016")
    })
  });
  describe('calculateInterval', () => {
    it('should return the correct number of days between two dates, inclusive', () => {
      expect(calculateInterval("Jan 01, 2016", "Jan 28, 2016", 365)).to.equal(28)
    });
    it('should return an error message when the interval exceeds the specified maxinterval', () => {
      expect(calculateInterval("Jan 01, 2016", "Jan 28, 2017", 365)).to.equal("Invalid Date Range")
    })
  });
  describe('getAllDates', () => {
    it('should return an array of all dates between two specified dates', () => {
      expect(getAllDates("Jan 01, 2016", "Jan 03, 2016")).to.have.same.members(["Jan 01, 2016", "Jan 02, 2016", "Jan 03, 2016"])
    });
    it('should return an error message when the startdate comes after the enddate', () => {
      expect(getAllDates("Jan 03, 2016", "Jan 01, 2016")).to.have.same.members(["Error: enddate should be after startdate"])
    })
  });
});
