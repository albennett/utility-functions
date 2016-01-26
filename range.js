module.exports = function(length, length2){
  
  var array = [];

  if(length, length2){
    for (i = length; i < length2; i++)
    array.push(i);
  } else {
    for (i = 0; i < length; i++) {
      array.push(i);
    }
  }
  console.log("array", array);
   return array;
};

//(start, stop)
//var range = [];
//if (!stop){
  //stop = start;
  //start = 0;
//}

//for (var i = 0; start < stop; start++; i++){
  //range[i] = start;
//}
  //return range;
 //};




//if (length) {
  //return new Array(length);
//}else {
  //return [];
//}
//
//var array = [];
//return array[length -1] = '';
//};
