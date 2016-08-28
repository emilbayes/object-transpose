'use strict';
var test = require('tape');
var T = require('./index');

var a = [{a: 1, b: 10}, {a: 2, b: 20}];
var o = {a: [1, 2], b: [10, 20]};


test('T(a) === o', function(t) {
  t.plan(1);

  t.deepEqual(T(a), o);
});
test('T(o) === a', function(t) {
  t.plan(1);

  t.deepEqual(T(o), a);
});
test('T(T(a)) === a', function(t) {
  t.plan(1);

  t.deepEqual(T(T(a)), a);
});

var sparseA = [{a: 1}, {b: 20}];
var sparseO = {a: [1], b: [, 20]};

test('T(sparseA) === sparseO', function(t) {
  t.plan(1);

  t.deepEqual(T(sparseA), sparseO);
});
test('T(sparseO) === sparseA', function(t) {
  t.plan(1);

  t.deepEqual(T(sparseO), sparseA);
});
test('T(T(sparseA)) === sparseA', function(t) {
  t.plan(1);

  t.deepEqual(T(T(sparseA)), sparseA);
});

var zeroAndNullEntries = {
  a: [0, null, 1],
  b: [2, , 3]
};

test('T(T(zeroAndNullEntries)) === zeroAndNullEntries', function (t) {
  t.plan(1);

  t.deepEqual(T(T(zeroAndNullEntries)), zeroAndNullEntries);
});
