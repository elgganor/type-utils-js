const isFunction = (value) => {
    return Object.prototype.toString.call(value) == '[object Function]';
}

module.exports = exports = isFunction;
