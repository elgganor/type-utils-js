const { expect } = require('chai');
const isObject = require('../../src/object');

class User {
    name;

    constructor (name) {
        this.name = name;
    }
}

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

describe('isObject', () => {
    it('should return true when value is object type', () => {
        expect(isObject({})).to.be.true;
        expect(isObject({ foo: true })).to.be.true;

        expect(isObject(new Object())).to.be.true;
        expect(isObject(new Person('John', 'Doe'))).to.be.true;
        expect(isObject(new User('John Doe'))).to.be.true;
    });

    it('should return false when value is not object type', () => {
        expect(isObject('')).to.be.false;
        expect(isObject('hello')).to.be.false;

        expect(isObject(0)).to.be.false;
        expect(isObject(2342)).to.be.false;

        expect(isObject(true)).to.be.false;
        expect(isObject(false)).to.be.false;
    });
})
