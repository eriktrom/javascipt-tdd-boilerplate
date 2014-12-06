define(['palindrome'], function(palindrome) {

  module('palindrome');

  test('prints "this is a palindrome', function(){
    equal( palindrome('racecar'), 'racecar is a palindrome');
    equal( palindrome('bob'), 'bob is a palindrome');
    equal( palindrome('mom MOM'), 'mom MOM is a palindrome');
    equal( palindrome('b'), 'b is a palindrome');
  });

  test('prints "ca, diary, null and empty string are NOT a palindromes', function(){
    equal( palindrome('ca'), 'ca is NOT a palindrome');
    equal( palindrome('diary'), 'diary is NOT a palindrome');
    equal( palindrome(null), 'null is NOT a palindrome');
    equal( palindrome(''), ' is NOT a palindrome');
  });

});
