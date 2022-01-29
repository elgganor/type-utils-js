
# type-package

Type-package is an npm package providing type checking helpers for javascript.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![AppVeyor tests](https://img.shields.io/appveyor/tests/mrouabeh/type-package)

## Table Of Content

* [Installation](#)
* [Running Tests](#)

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
const { isString } = require('@elgganor/type');

isString('Hello World'); // -> true
isString(123); // -> false
```


### isFunction
```javascript
const { isString } = require('@elgganor/type');

isString('Hello World'); // -> true
isString(123); // -> false
```


### isArray
```javascript
const { isString } = require('@elgganor/type');

isString('Hello World'); // -> true
isString(123); // -> false
```


### isDate
```javascript
const { isString } = require('@elgganor/type');

isString('Hello World'); // -> true
isString(123); // -> false
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

[MIT](https://choosealicense.com/licenses/mit/)


## Tech Stack

* **JavaScript**
* **Mocha**
* **Chai**
* **Eslint**


## Support

For support, email mohamed.rouabehi.code@gmail.com


## Feedback

If you have any feedback, please reach out to us at mohamed.rouabehi.code@gmail.com


