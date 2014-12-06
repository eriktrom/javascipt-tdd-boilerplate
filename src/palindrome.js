define([], function () {

  return function palindrome(str) {

    return ( isPalindrome(str) ) ? "" + str + " is a palindrome" : "" + str + " is NOT a palindrome";

  };

  function isPalindrome(str) {
    var sanitizedString;
    var start;
    var end;

    if (!str) { return false; }
    if (str.length === 1) { return true; }

    sanitizedString = str.toLowerCase().replace(/\s+/g, '');
    start = 0;
    end = sanitizedString.length -1;

    while (start <= end) {
      if ( sanitizedString.charAt(start) !== sanitizedString.charAt(end) ) {
        return false;
      }

      start++;
      end--;

    }

    return true;
  }
});
