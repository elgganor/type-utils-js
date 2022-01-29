const { expect } = require('chai');
const isNumber = require('../../src/number');

describe('isNumber', () => {
    it('should return true when value is number type', () => {
        expect(isNumber(0)).to.be.true;
        expect(isNumber(123)).to.be.true;
        expect(isNumber(-123)).to.be.true;

        expect(isNumber(Number('24'))).to.be.true;
        expect(isNumber(Number(23))).to.be.true;
        expect(isNumber(Number(true))).to.be.true;
        expect(isNumber(Number(false))).to.be.true;
    });

    it('should return false when value is not number type', () => {
        expect(isNumber(NaN)).to.be.false;
        expect(isNumber('')).to.be.false;
        expect(isNumber('hello')).to.be.false;

        expect(isNumber(true)).to.be.false;
        expect(isNumber(false)).to.be.false;

        expect(isNumber({})).to.be.false;
        expect(isNumber({ foo: true })).to.be.false;

        expect(isNumber(Number('true'))).to.be.false;
        expect(isNumber(Number('false'))).to.be.false;
    });
});
