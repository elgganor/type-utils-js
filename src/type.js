function type(obj, showFullClass) {

    // get toPrototypeString() of obj (handles all types)
    if (showFullClass && typeof obj === "object") {
        return Object.prototype.toString.call(obj);
    }
    if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion

    var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
    if (deepType === 'generatorfunction') { return 'function' }

    // Prevent overspecificity (for example, [object HTMLDivElement], etc).
    // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
    // String.prototype.match is universally supported.

    return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
        (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
}

module.exports = exports = type;
