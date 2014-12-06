define([], function () {

  return function orderLetters(str){
    var splitString = str.split('');

    return splitString.sort().join('');
  };
});
