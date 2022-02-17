const isNumber = (value) => {
    return (typeof value === 'number' || value instanceof Number) && !Number.isNaN(value);
}

module.exports = exports = isNumber;
