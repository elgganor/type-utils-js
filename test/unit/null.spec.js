const { expect } = require('chai');
const isNull = require('../../src/null');

const arrowFn = () => {
    return 'arrowFn'
}

function basicFn () {
    return 'basicFn';
}

describe('isNull', () => {
    describe('should return true', () => {
        it('when value is null', () => {
            expect(isNull(null)).to.be.true;
        });
    })

    describe('should return false', () => {
        it('when value is undefined', () => {
            expect(isNull()).to.be.false;
            expect(isNull(undefined)).to.be.false;
        })

        it('when value is a boolean', () => {
            expect(isNull(true)).to.be.false;
            expect(isNull(false)).to.be.false;
        })

        it('when value is a number', () => {
            expect(isNull(0)).to.be.false;
            expect(isNull(2342)).to.be.false;
        })

        it('when value is string', () => {
            expect(isNull('')).to.be.false;
            expect(isNull('hello')).to.be.false;
        })

        it('when value is an object', () => {
            expect(isNull({})).to.be.false;
            expect(isNull({ foo: true })).to.be.false;
        })

        it('when value is an array', () => {
            expect(isNull([])).to.be.false;
            expect(isNull([1, 2, 3, 4])).to.be.false;
        })

        it('when value is a date', () => {
            expect(isNull(new Date())).to.be.false;
            expect(isNull(new Date('10/01/2022'))).to.be.false;
        })

        it('when value is a function', () => {
            expect(isNull(basicFn)).to.be.false;
            expect(isNull(arrowFn)).to.be.false;
        })
    })
});
