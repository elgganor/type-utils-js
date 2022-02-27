const { expect } = require('chai');
const isBoolean = require('../../src/boolean');

const arrowFn = () => {
    return 'arrowFn'
}

function basicFn () {
    return 'basicFn';
}

describe('isBoolean', () => {
    describe('should return true', () => {
        it('when value is true or false', () => {
            expect(isBoolean(true)).to.be.true;
            expect(isBoolean(false)).to.be.true;
        })

        it('when value is from Boolean constructor', () => {
            expect(isBoolean(Boolean(true))).to.be.true;
            expect(isBoolean(Boolean(false))).to.be.true;
            expect(isBoolean(Boolean(0))).to.be.true;
            expect(isBoolean(Boolean(1))).to.be.true;
            expect(isBoolean(Boolean('true'))).to.be.true;
            expect(isBoolean(Boolean('false'))).to.be.true;
        })

        it('when value is from new Boolean constructor', () => {
            expect(isBoolean(new Boolean(true))).to.be.true;
            expect(isBoolean(new Boolean(false))).to.be.true;
            expect(isBoolean(new Boolean(0))).to.be.true;
            expect(isBoolean(new Boolean(1))).to.be.true;
            expect(isBoolean(new Boolean('true'))).to.be.true;
            expect(isBoolean(new Boolean('false'))).to.be.true;
        })
    })

    describe('should return false', () => {
        it('when value is null', () => {
            expect(isBoolean(null)).to.be.false;
        });

        it('when value is undefined', () => {
            expect(isBoolean()).to.be.false;
            expect(isBoolean(undefined)).to.be.false;
        })

        it('when value is a number', () => {
            expect(isBoolean(0)).to.be.false;
            expect(isBoolean(2342)).to.be.false;
        })

        it('when value is string', () => {
            expect(isBoolean('')).to.be.false;
            expect(isBoolean('hello')).to.be.false;
        })

        it('when value is an object', () => {
            expect(isBoolean({})).to.be.false;
            expect(isBoolean({ foo: true })).to.be.false;
        })

        it('when value is an array', () => {
            expect(isBoolean([])).to.be.false;
            expect(isBoolean([1, 2, 3, 4])).to.be.false;
        })

        it('when value is a date', () => {
            expect(isBoolean(new Date())).to.be.false;
            expect(isBoolean(new Date('10/01/2022'))).to.be.false;
        })

        it('when value is a function', () => {
            expect(isBoolean(basicFn)).to.be.false;
            expect(isBoolean(arrowFn)).to.be.false;
        })
    })
});
