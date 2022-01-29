const { expect } = require('chai');
const isBoolean = require('../../src/boolean');

describe('isBoolean', () => {
    it('should return true when value is boolean type', () => {
        expect(isBoolean(true)).to.be.true;
        expect(isBoolean(false)).to.be.true;

        expect(isBoolean(Boolean(true))).to.be.true;
        expect(isBoolean(Boolean(false))).to.be.true;
        expect(isBoolean(Boolean(0))).to.be.true;
        expect(isBoolean(Boolean(1))).to.be.true;
        expect(isBoolean(Boolean('true'))).to.be.true;
        expect(isBoolean(Boolean('false'))).to.be.true;
    });

    it('should return false when value is not boolean type', () => {
        expect(isBoolean('')).to.be.false;
        expect(isBoolean('hello')).to.be.false;

        expect(isBoolean(0)).to.be.false;
        expect(isBoolean(2342)).to.be.false;

        expect(isBoolean({})).to.be.false;
        expect(isBoolean({ foo: true })).to.be.false;
    });
});
