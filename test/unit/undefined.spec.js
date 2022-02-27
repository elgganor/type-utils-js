const { expect } = require('chai');
const isUndefined = require('../../src/undefined');

const arrowFn = () => {
    return 'arrowFn'
}

function basicFn () {
    return 'basicFn';
}

describe('isUndefined', () => {
    describe('should return true', () => {
        it('when value is empty', () => {
            expect(isUndefined()).to.be.true;
        });

        it('when value is undefined', () => {
            expect(isUndefined(undefined)).to.be.true;
        });
    })

    describe('should return false', () => {
        it('when value is null', () => {
            expect(isUndefined(null)).to.be.false;
        });

        it('when value is a boolean', () => {
            expect(isUndefined(true)).to.be.false;
            expect(isUndefined(false)).to.be.false;
        })

        it('when value is a number', () => {
            expect(isUndefined(0)).to.be.false;
            expect(isUndefined(2342)).to.be.false;
        })

        it('when value is string', () => {
            expect(isUndefined('')).to.be.false;
            expect(isUndefined('hello')).to.be.false;
        })

        it('when value is an object', () => {
            expect(isUndefined({})).to.be.false;
            expect(isUndefined({ foo: true })).to.be.false;
        })

        it('when value is an array', () => {
            expect(isUndefined([])).to.be.false;
            expect(isUndefined([1, 2, 3, 4])).to.be.false;
        })

        it('when value is a date', () => {
            expect(isUndefined(new Date())).to.be.false;
            expect(isUndefined(new Date('10/01/2022'))).to.be.false;
        })

        it('when value is a function', () => {
            expect(isUndefined(basicFn)).to.be.false;
            expect(isUndefined(arrowFn)).to.be.false;
        })
    })
});
