const { expect } = require('chai');
const isString = require('../../src/string');

describe('isString', () => {
    it('should return true when value is string type', () => {
        expect(isString('')).to.be.true;
        expect(isString("Hello")).to.be.true;
        expect(isString(`Foo Bar Baz`)).to.be.true;

        expect(isString(String('24'))).to.be.true;
        expect(isString(String(23))).to.be.true;
        expect(isString(String(true))).to.be.true;
        expect(isString(String(false))).to.be.true;
        expect(isString(String({ a: 'foo' }))).to.be.true;

        expect(isString(new String('24'))).to.be.true;
        expect(isString(new String(23))).to.be.true;
        expect(isString(new String(true))).to.be.true;
        expect(isString(new String(false))).to.be.true;
        expect(isString(new String({ a: 'foo' }))).to.be.true;
    });

    it('should return false when value is not string type', () => {
        expect(isString(NaN)).to.be.false;
        expect(isString(0)).to.be.false;
        expect(isString(123)).to.be.false;
        expect(isString(-123)).to.be.false;

        expect(isString(true)).to.be.false;
        expect(isString(false)).to.be.false;

        expect(isString({})).to.be.false;
        expect(isString({ foo: true })).to.be.false;
    });
});
