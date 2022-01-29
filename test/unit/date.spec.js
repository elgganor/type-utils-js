const { expect } = require('chai');
const isDate = require('../../src/date');

describe('isDate', () => {
    it('should return true when value is date type', () => {
        expect(isDate(new Date())).to.be.true;
        expect(isDate(new Date('10/01/2022'))).to.be.true;
        expect(isDate(new Date(2022, 2, 29))).to.be.true;
    });

    it('should return false when value is not date type', () => {
        expect(isDate('')).to.be.false;
        expect(isDate('hello')).to.be.false;

        expect(isDate(0)).to.be.false;
        expect(isDate(2342)).to.be.false;

        expect(isDate({})).to.be.false;
        expect(isDate({ foo: true })).to.be.false;

        expect(isDate(true)).to.be.false;
        expect(isDate(false)).to.be.false;
    });
});
