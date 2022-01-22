const greet = (name) => {
    if (name && typeof name === 'string') {
        return `Hello ${name}!`;
    }
    return 'Hello World!';
}

module.exports = exports = greet;
