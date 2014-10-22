define(['lodash'], function (_) {

  return _.chain(_.range(1, 101))
    .reduce(function (memo, num) {
      if (num % 3 === 0 && num % 5 === 0) memo.push("FizzBuzz");
      else if (num % 3 === 0) memo.push("Fizz");
      else if (num % 5 === 0) memo.push("Buzz");
      else memo.push(num);

      return memo;
    }, [])
    .join("\n")
    .value();

});
