var range = require('./range');

module.exports = function (length) {
  return range(length).reduce(function (prev, curr) {
    prev[curr] = curr;
    return prev
  }, {});
};

//var range = require('./range')(length);

//module.exports = function(length){
  ////return {};i

  ////var object = {};
  ////range.map(function(key, value){
    ////object[value] = key;
  ////});
  ////return object;
////};

//return range(length).reduce(function(prev, curr){
//prev[curr] = curr.length
//return prev
//}, {})

//};

//recursion in javascript
