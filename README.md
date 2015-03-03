Object Transpose
----------------

[![build status][1]][2]
[![NPM version][3]][4]


Transpose between array of objects and object of arrays.
Supports objects of sparse arrays and arrays of irregular objects.

See [`test.js`](test.js) for examples.

Installation
============

```bash
npm install --save object-transpose
```

Example
=======

```js
var assert = require('assert');
var T = require('object-transpose');

var collection = [
   { a: 1, b: 10 },
   { a: 2, b: 20}
];

assert.deepEqual(T(collection), { a: [1, 2], b: [10, 20] });
assert.deepEqual(T(T(collection)), collection);
```

License
=======

ISC

  [1]: https://secure.travis-ci.org/emilbayes/object-transpose.svg
  [2]: https://travis-ci.org/emilbayes/object-transpose
  [3]: https://badge.fury.io/js/object-transpose.svg
  [4]: https://badge.fury.io/js/object-transpose
