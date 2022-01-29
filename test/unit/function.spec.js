const { expect } = require('chai');
const isFunction = require('../../src/function');

const arrowFn = () => {
    return 'arrowFn'
}

function basicFn () {
    return 'basicFn';
}

describe('isFunction', () => {
    it('should return true when value is function type', () => {
        expect(isFunction(basicFn)).to.be.true;
        expect(isFunction(arrowFn)).to.be.true;
    });

    it('should return false when value is not function type', () => {
        expect(isFunction('')).to.be.false;
        expect(isFunction('hello')).to.be.false;

        expect(isFunction(0)).to.be.false;
        expect(isFunction(2342)).to.be.false;

        expect(isFunction({})).to.be.false;
        expect(isFunction({ foo: true })).to.be.false;
    });
});
