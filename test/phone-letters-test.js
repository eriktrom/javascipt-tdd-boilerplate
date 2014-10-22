define(['lodash', 'pp'], function (_, pp) {

  module("Phone Letters");

  test("calculates the english words possible by hitting 2265", function() {

    var key2 = ["a", "b", "c"];
    var key6 = ["m", "n", "o"];
    var key5 = ["j", "k", "l"];

    var allLetters = key2.concat(key2).concat(key6).concat(key5);

    equal(pp(allLetters), pp(["a","b","c","a","b","c","m","n","o","j","k","l"]));
  });

});
