//Microsoft

//Given a string containing two unique repeating characters,
//sort them so all similar characters are together.
// Ex.  "aababbaabba" => "aaaaaabbbb"


define(['order-letters'], function (orderLetters) {

  module('order-letters');

  test('prints "give "ada" should return "aad"', function(){
    equal( orderLetters('ada'), 'aad');
  });

  test('prints "give "aababbaabba" should return "aaaaaabbbb"', function(){
    equal( orderLetters('aababbaabba'), 'aaaaaabbbbb');
  });

});
