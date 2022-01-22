const { expect } = require('chai');
const greet = require('../../src');

describe('Greet :: ', () => {
    it('should return "Hello World" when no name is provided', () => {
        expect(greet()).to.equal('Hello World!');
    });

    it('should return "Hello ${name}" when name is provided', () => {
        const name = 'John';
        expect(greet(name)).to.equal('Hello John!');
    });
});
