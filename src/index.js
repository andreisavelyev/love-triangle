/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences;
  var count = 0;
  for (var i = 0; i < arr.length; i++){
  	var a = arr[i];
    var b = arr[a-1];
    var c = arr[b-1];

    if((i+1===c)&&(b!=i+1)){
      count++;
    } else {
      continue;
    }
  }
  	return count/3;
};
