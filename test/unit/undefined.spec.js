const { expect } = require('chai');
const isUndefined = require('../../src/undefined');

describe('isUndefined', () => {
    it('should return true when value is undefined type', () => {
        expect(isUndefined()).to.be.true;
        expect(isUndefined(undefined)).to.be.true;
    });

    it('should return false when value is not undefined type', () => {
        expect(isUndefined('')).to.be.false;
        expect(isUndefined('hello')).to.be.false;

        expect(isUndefined(0)).to.be.false;
        expect(isUndefined(2342)).to.be.false;

        expect(isUndefined({})).to.be.false;
        expect(isUndefined({ foo: true })).to.be.false;
    });
});
