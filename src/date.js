const isDate = (value) => {
    return Object.prototype.toString.call(value) === '[object Date]' || value instanceof Date;
}

module.exports = exports = isDate;
