
# type-package

Type-package is a npm package providing type checking helpers for javascript.

## Table Of Content

* [Installation](#installation)
* [Usage](#usageexamples)
* [Running Tests](#running-tests)
* [Authors](#authors)
* [License](#license)
* [Tech Stack](#tech-stack)
* [Support](#support)
* [Feedback](#feedback)

## Installation

Install with npm

```bash
  npm install @elgganor/type
```


## Usage/Examples

### isString
```javascript
const { isString } = require('@elgganor/type');

isString('Hello World'); // -> true
isString(String('Hello World')); // -> true
```

### isNumber
```javascript
const { isNumber } = require('@elgganor/type');

isNumber(123); // -> true
isNumber(Number(123)); // -> true
```

### isBoolean
```javascript
const { isBoolean } = require('@elgganor/type');

isBoolean(true); // -> true
isBoolean(Boolean(1)); // -> false
```

### isNull
```javascript
const { isNull } = require('@elgganor/type');

isNull(null); // -> true
```


### isUndefined
```javascript
const { isUndefined } = require('@elgganor/type');

isUndefined(undefined); // -> true
```


### isObject
```javascript
const { isObject } = require('@elgganor/type');

isObject({ foo: true }); // -> true
isObject(new Object()); // -> true
```


### isFunction
```javascript
const { isFunction } = require('@elgganor/type');

isFunction(() => { console.log('Function'); }); // -> true
```


### isArray
```javascript
const { isArray } = require('@elgganor/type');

isArray(['foo', 'bar', 'baz']); // -> true
isArray(Array('foo', 'bar', 'baz')); // -> true
isArray(Array(6)); // -> true
```


### isDate
```javascript
const { isDate } = require('@elgganor/type');

isDate(new Date()); // -> true
isDate(new Date('10/01/2022')); // -> true
isDate(new Date(2022, 2, 29)); // -> true
```


## Running Tests

To run tests, run the following command

```bash
  npm run test:unit
```


[//]: # (## Contributing)

[//]: # ()
[//]: # (Contributions are always welcome!)

[//]: # ()
[//]: # (See `contributing.md` for ways to get started.)

[//]: # ()
[//]: # (Please adhere to this project's `code of conduct`.)


## Authors

- [@mrouabeh](https://github.com/mrouabeh)


## License

[MIT](LICENSE.md)


## Tech Stack

* **JavaScript**
* **Mocha**
* **Chai**
* **Eslint**


## Support

For support, email mohamed.rouabehi.code@gmail.com


## Feedback

If you have any feedback, please reach out to us at mohamed.rouabehi.code@gmail.com


