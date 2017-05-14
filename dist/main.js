'use strict';

require('babel-polyfill');

var _math = require('lib/math');

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

[1, 2, 3].map(function (x) {
  return x * x;
});

alert('hello');

console.log("2π = " + math.sum(math.pi, math.pi));