// return true if the a value can be found in an array
// by the sum of two numbers.


define(['find-sum-in-array'], function (findSumInArray) {

  module('find-sum-in-array');

  test('prints "with [5,4,10,3,8] and 15 will return true"', function(){
    equal( findSumInArray( [5,4,10,3,8], 15 ), true);
  });

  test('prints "with [5,4,11,3,2] and 15 will return false"', function(){
    equal( findSumInArray( [5,1,11,3,2], 15 ), false);
  });

  test('prints "with [5,5] and 10 will return false"', function(){
    equal( findSumInArray( [5,5], 10 ), false);
  });

  test('prints "with [] and 15 will return false"', function(){
    equal( findSumInArray( [], 15 ), false);
  });

  test('prints "with [1] and 15 will return false"', function(){
    equal( findSumInArray( [1], 15 ), false);
  });

  test('prints "with negitive numbers [-1, -4] and -5 will return false"', function(){
    equal( findSumInArray( [-1, -4], -5 ), true);
  });

  test('prints "with a zero [0, 10] and 10 will return true"', function(){
    equal( findSumInArray( [0, 10], 10 ), true);
  });

  test('prints "with a null [null, 10] and 10 will return false"', function(){
    equal( findSumInArray( [null, 10], 10 ), false);
  });

});
