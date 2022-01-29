const { expect } = require('chai');
const isNull = require('../../src/null');

describe('isNull', () => {
    it('should return true when value is null type', () => {
        expect(isNull(null)).to.be.true;
    });

    it('should return false when value is not null type', () => {
        expect(isNull()).to.be.false;
        expect(isNull(undefined)).to.be.false;

        expect(isNull('')).to.be.false;
        expect(isNull('hello')).to.be.false;

        expect(isNull(0)).to.be.false;
        expect(isNull(2342)).to.be.false;

        expect(isNull({})).to.be.false;
        expect(isNull({ foo: true })).to.be.false;
    });
});
