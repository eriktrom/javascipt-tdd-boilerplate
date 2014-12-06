define(['lodash'], function (_) {

  return _.chain(_.range(1, 101))
    .reduce(function (memo, num) {
      var word = "";

      if (num % 3 === 0) word += "Fizz";
      if (num % 5 === 0) word +=("Buzz");

      memo.push(word || num);

      return memo;
    }, [])
    .join("\n")
    .value();

});
