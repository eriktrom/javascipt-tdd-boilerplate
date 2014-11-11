define([], function () {

  return function findSumInArray(arr, num) {
    var sortedArray = arr.sort();
    var ret = false;

    sortedArray.filter( function( element ) {

      var value = num - element;

      if ( sortedArray.indexOf(value) > 0 ) {
        ret = true;
      }

    });

    return ret;
  };
});
