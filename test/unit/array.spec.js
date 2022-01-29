const { expect } = require('chai');
const isArray = require('../../src/array');

describe('isArray', () => {
    it('should return true when value is array type', () => {
        expect(isArray([])).to.be.true;
        expect(isArray(['Foo', 'Bar', 'Baz'])).to.be.true;

        expect(isArray(Array(true, false))).to.be.true;
        expect(isArray(Array('foo', 'bar', 'baz'))).to.be.true;
        expect(isArray(Array(0))).to.be.true;
        expect(isArray(Array(3))).to.be.true;
    });

    it('should return false when value is not array type', () => {
        expect(isArray('')).to.be.false;
        expect(isArray('hello')).to.be.false;

        expect(isArray(0)).to.be.false;
        expect(isArray(2342)).to.be.false;

        expect(isArray({})).to.be.false;
        expect(isArray({ foo: true })).to.be.false;

        expect(isArray(true)).to.be.false;
        expect(isArray(false)).to.be.false;
    });
});
