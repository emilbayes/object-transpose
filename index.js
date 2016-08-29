'use strict'

/**
* Transpose an Array of Objects to an Object of Arrays and vice versa
* Example:
* ```js
* var data = [{year: 2012, turnover: 20}, {year: 2013, turnover: 18}]
* var dataT = transpose(data);
* console.log(dataT); //{year: [2012, 2013], turnover: [20, 18]}
* ```
* @param  {Array|Object} data
* @return {Object|Array}
*/
module.exports = function transpose (data) {
  if (Array.isArray(data)) return transposeArray(data)
  else return transposeObject(data)
}

function transposeObject (data) {
  var res = []
  var key, i

  for (key in data) {
    for (i = 0; i < data[key].length; i++) {
      res[i] = res[i] || {}
      if (data[key][i] !== undefined) res[i][key] = data[key][i]
    }
  }

  return res
}

function transposeArray (data) {
  var res = {}
  var i, key

  for (i = 0; i < data.length; i++) {
    for (key in data[i]) {
      res[key] = res[key] || []
      res[key][i] = data[i][key]
    }
  }

  return res
}
