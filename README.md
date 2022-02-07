
# @elgganor/type-utils

Type-utils is an npm package providing type checking helpers for javascript.

## Table Of Content

- [@elgganor/type-utils](#elgganortype-utils)
  - [Table Of Content](#table-of-content)
  - [Installation](#installation)
  - [Usage/Examples](#usageexamples)
    - [isString](#isstring)
    - [isNumber](#isnumber)
    - [isBoolean](#isboolean)
    - [isNull](#isnull)
    - [isUndefined](#isundefined)
    - [isObject](#isobject)
    - [isFunction](#isfunction)
    - [isArray](#isarray)
    - [isDate](#isdate)
  - [Running Tests](#running-tests)
  - [Authors](#authors)
  - [License](#license)
  - [Tech Stack](#tech-stack)
  - [Support](#support)
  - [Feedback](#feedback)

## Installation

Install with npm

```bash
  npm install @elgganor/type-utils
```


## Usage/Examples

### isString
```javascript
const { isString } = require('@elgganor/type-utils');

isString('Hello World'); // -> true
isString(String('Hello World')); // -> true
```

### isNumber
```javascript
const { isNumber } = require('@elgganor/type-utils');

isNumber(123); // -> true
isNumber(Number(123)); // -> true
```

### isBoolean
```javascript
const { isBoolean } = require('@elgganor/type-utils');

isBoolean(true); // -> true
isBoolean(Boolean(1)); // -> true
```

### isNull
```javascript
const { isNull } = require('@elgganor/type-utils');

isNull(null); // -> true
```


### isUndefined
```javascript
const { isUndefined } = require('@elgganor/type-utils');

isUndefined(undefined); // -> true
```


### isObject
```javascript
const { isObject } = require('@elgganor/type-utils');

isObject({ foo: true }); // -> true
isObject(new Object()); // -> true
```


### isFunction
```javascript
const { isFunction } = require('@elgganor/type-utils');

isFunction(() => { console.log('Function'); }); // -> true
```


### isArray
```javascript
const { isArray } = require('@elgganor/type-utils');

isArray(['foo', 'bar', 'baz']); // -> true
isArray(Array('foo', 'bar', 'baz')); // -> true
isArray(Array(6)); // -> true
```


### isDate
```javascript
const { isDate } = require('@elgganor/type-utils');

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


