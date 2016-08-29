'use strict'
var test = require('tape')
var T = require('./index')

var a = [{a: 1, b: 10}, {a: 2, b: 20}]
var o = {a: [1, 2], b: [10, 20]}

test('T(a) === o', function (assert) {
  assert.deepEqual(T(a), o)
  assert.end()
})
test('T(o) === a', function (assert) {
  assert.deepEqual(T(o), a)
  assert.end()
})
test('T(T(a)) === a', function (assert) {
  assert.deepEqual(T(T(a)), a)
  assert.end()
})

var sparseA = [{a: 1}, {b: 20}]
var sparseO = {a: [1], b: [, 20]} // eslint-disable-line no-sparse-arrays

test('T(sparseA) === sparseO', function (assert) {
  assert.deepEqual(T(sparseA), sparseO)
  assert.end()
})
test('T(sparseO) === sparseA', function (assert) {
  assert.deepEqual(T(sparseO), sparseA)
  assert.end()
})
test('T(T(sparseA)) === sparseA', function (assert) {
  assert.deepEqual(T(T(sparseA)), sparseA)
  assert.end()
})

var zeroAndNullEntries = {
  a: [0, null, 1],
  b: [2, , 3] // eslint-disable-line no-sparse-arrays
}

test('T(T(zeroAndNullEntries)) === zeroAndNullEntries', function (assert) {
  assert.deepEqual(T(T(zeroAndNullEntries)), zeroAndNullEntries)
  assert.end()
})
